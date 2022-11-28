package shared

// Animation
// Animation types.
type Animation struct {
	AnimationEnd    *AnimationEnd    `json:"animationEnd,omitempty"`
	AnimationFade   *AnimationFade   `json:"animationFade,omitempty"`
	AnimationStatic *AnimationStatic `json:"animationStatic,omitempty"`
}
