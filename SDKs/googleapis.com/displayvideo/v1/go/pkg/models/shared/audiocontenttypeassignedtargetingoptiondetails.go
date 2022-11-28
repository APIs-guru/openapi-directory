package shared

type AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum string

const (
	AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum = "AUDIO_CONTENT_TYPE_UNSPECIFIED"
	AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown     AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum = "AUDIO_CONTENT_TYPE_UNKNOWN"
	AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic       AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum = "AUDIO_CONTENT_TYPE_MUSIC"
	AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast   AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum = "AUDIO_CONTENT_TYPE_BROADCAST"
	AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast     AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum = "AUDIO_CONTENT_TYPE_PODCAST"
)

// AudioContentTypeAssignedTargetingOptionDetails
// Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
type AudioContentTypeAssignedTargetingOptionDetails struct {
	AudioContentType  *AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum `json:"audioContentType,omitempty"`
	TargetingOptionID *string                                                             `json:"targetingOptionId,omitempty"`
}
