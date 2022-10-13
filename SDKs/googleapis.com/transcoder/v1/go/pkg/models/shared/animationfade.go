package shared

type AnimationFadeFadeTypeEnum string

const (
	AnimationFadeFadeTypeEnumFadeTypeUnspecified AnimationFadeFadeTypeEnum = "FADE_TYPE_UNSPECIFIED"
	AnimationFadeFadeTypeEnumFadeIn              AnimationFadeFadeTypeEnum = "FADE_IN"
	AnimationFadeFadeTypeEnumFadeOut             AnimationFadeFadeTypeEnum = "FADE_OUT"
)

type AnimationFade struct {
	EndTimeOffset   *string                    `json:"endTimeOffset"`
	FadeType        *AnimationFadeFadeTypeEnum `json:"fadeType"`
	StartTimeOffset *string                    `json:"startTimeOffset"`
	Xy              *NormalizedCoordinate      `json:"xy"`
}
