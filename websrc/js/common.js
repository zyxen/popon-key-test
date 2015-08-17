var dt = Number;
dt = 5000;

$(document).ready(function(){
	runSinage();
	
	
	
});

function runSinage() {
	$(".backImage_5").animate({opacity:"0.0"}, dt, function() {
		$(".backImage_4").animate({opacity:"0.0"}, dt, function() {
			$(".backImage_3").animate({opacity:"0.0"}, dt, function() {
				$(".backImage_2").animate({opacity:"0.0"}, dt, function() {
					$(".backImage_5").animate({opacity:"1.0"}, dt, function() {
						$(".backImage_4").css({opacity:"1.0"});
						$(".backImage_3").css({opacity:"1.0"});
						$(".backImage_2").css({opacity:"1.0"});
						runSinage();
					})
				})
			})
		})
	});
}
