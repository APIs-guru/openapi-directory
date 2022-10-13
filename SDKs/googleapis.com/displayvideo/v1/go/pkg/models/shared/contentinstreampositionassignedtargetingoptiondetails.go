package shared

type ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum string

const (
	ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeUnspecified ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_UNSPECIFIED"
	ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeDisplay     ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_DISPLAY"
	ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeVideo       ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_VIDEO"
	ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeAudio       ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_AUDIO"
)

type ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum string

const (
	ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnspecified ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum = "CONTENT_INSTREAM_POSITION_UNSPECIFIED"
	ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll     ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum = "CONTENT_INSTREAM_POSITION_PRE_ROLL"
	ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll     ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum = "CONTENT_INSTREAM_POSITION_MID_ROLL"
	ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll    ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum = "CONTENT_INSTREAM_POSITION_POST_ROLL"
	ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown     ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum = "CONTENT_INSTREAM_POSITION_UNKNOWN"
)

type ContentInstreamPositionAssignedTargetingOptionDetails struct {
	AdType                  *ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum                  `json:"adType"`
	ContentInstreamPosition *ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum `json:"contentInstreamPosition"`
	TargetingOptionID       *string                                                                           `json:"targetingOptionId"`
}
