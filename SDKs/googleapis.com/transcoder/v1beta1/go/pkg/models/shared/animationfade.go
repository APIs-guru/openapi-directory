package shared

type AnimationFadeFadeTypeEnum string

const (
	AnimationFadeFadeTypeEnumFadeTypeUnspecified AnimationFadeFadeTypeEnum = "FADE_TYPE_UNSPECIFIED"
	AnimationFadeFadeTypeEnumFadeIn              AnimationFadeFadeTypeEnum = "FADE_IN"
	AnimationFadeFadeTypeEnumFadeOut             AnimationFadeFadeTypeEnum = "FADE_OUT"
)

// AnimationFade
// Display overlay object with fade animation.
type AnimationFade struct {
	EndTimeOffset   *string                    `json:"endTimeOffset,omitempty"`
	FadeType        *AnimationFadeFadeTypeEnum `json:"fadeType,omitempty"`
	StartTimeOffset *string                    `json:"startTimeOffset,omitempty"`
	Xy              *NormalizedCoordinate      `json:"xy,omitempty"`
}
