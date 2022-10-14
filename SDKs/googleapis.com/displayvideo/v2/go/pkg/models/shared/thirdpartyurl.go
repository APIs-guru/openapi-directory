package shared

type ThirdPartyURLTypeEnum string

const (
	ThirdPartyURLTypeEnumThirdPartyURLTypeUnspecified             ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_UNSPECIFIED"
	ThirdPartyURLTypeEnumThirdPartyURLTypeImpression              ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_IMPRESSION"
	ThirdPartyURLTypeEnumThirdPartyURLTypeClickTracking           ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_CLICK_TRACKING"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoStart         ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoFirstQuartile ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoMidpoint      ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoThirdQuartile ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoComplete      ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoMute          ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoPause         ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoRewind        ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoFullscreen    ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoStop          ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoCustom        ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoSkip          ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP"
	ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoProgress      ThirdPartyURLTypeEnum = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS"
)

type ThirdPartyURL struct {
	Type *ThirdPartyURLTypeEnum `json:"type,omitempty"`
	URL  *string                `json:"url,omitempty"`
}
