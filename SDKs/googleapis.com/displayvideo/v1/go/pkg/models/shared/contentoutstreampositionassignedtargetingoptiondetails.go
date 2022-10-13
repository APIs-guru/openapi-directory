package shared

type ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum string

const (
	ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeUnspecified ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_UNSPECIFIED"
	ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeDisplay     ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_DISPLAY"
	ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeVideo       ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_VIDEO"
	ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeAudio       ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_AUDIO"
)

type ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum string

const (
	ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnspecified  ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED"
	ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnknown      ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = "CONTENT_OUTSTREAM_POSITION_UNKNOWN"
	ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE"
	ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner     ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = "CONTENT_OUTSTREAM_POSITION_IN_BANNER"
	ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed       ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = "CONTENT_OUTSTREAM_POSITION_IN_FEED"
	ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInterstitial ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"
)

type ContentOutstreamPositionAssignedTargetingOptionDetails struct {
	AdType                   *ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum                   `json:"adType"`
	ContentOutstreamPosition *ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum `json:"contentOutstreamPosition"`
	TargetingOptionID        *string                                                                             `json:"targetingOptionId"`
}
