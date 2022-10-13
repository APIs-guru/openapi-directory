package shared

type Animation struct {
	AnimationEnd    *AnimationEnd    `json:"animationEnd"`
	AnimationFade   *AnimationFade   `json:"animationFade"`
	AnimationStatic *AnimationStatic `json:"animationStatic"`
}
