package shared

type ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum string

const (
	ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnumContentStreamTypeUnspecified ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum = "CONTENT_STREAM_TYPE_UNSPECIFIED"
	ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnumContentLiveStream            ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum = "CONTENT_LIVE_STREAM"
	ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnumContentOnDemand              ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum = "CONTENT_ON_DEMAND"
)

// ContentStreamTypeAssignedTargetingOptionDetailsInput
// Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
type ContentStreamTypeAssignedTargetingOptionDetailsInput struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// ContentStreamTypeAssignedTargetingOptionDetails
// Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
type ContentStreamTypeAssignedTargetingOptionDetails struct {
	ContentStreamType *ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum `json:"contentStreamType,omitempty"`
	TargetingOptionID *string                                                               `json:"targetingOptionId,omitempty"`
}
