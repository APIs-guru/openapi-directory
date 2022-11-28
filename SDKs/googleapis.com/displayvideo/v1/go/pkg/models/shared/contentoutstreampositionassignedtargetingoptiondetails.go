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

// ContentOutstreamPositionAssignedTargetingOptionDetails
// Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
type ContentOutstreamPositionAssignedTargetingOptionDetails struct {
	AdType                   *ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum                   `json:"adType,omitempty"`
	ContentOutstreamPosition *ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum `json:"contentOutstreamPosition,omitempty"`
	TargetingOptionID        *string                                                                             `json:"targetingOptionId,omitempty"`
}

// ContentOutstreamPositionAssignedTargetingOptionDetailsInput
// Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
type ContentOutstreamPositionAssignedTargetingOptionDetailsInput struct {
	ContentOutstreamPosition *ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum `json:"contentOutstreamPosition,omitempty"`
	TargetingOptionID        *string                                                                             `json:"targetingOptionId,omitempty"`
}
