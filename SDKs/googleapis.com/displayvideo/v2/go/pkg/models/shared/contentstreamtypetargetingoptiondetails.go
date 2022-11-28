package shared

type ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum string

const (
	ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnumContentStreamTypeUnspecified ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum = "CONTENT_STREAM_TYPE_UNSPECIFIED"
	ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnumContentLiveStream            ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum = "CONTENT_LIVE_STREAM"
	ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnumContentOnDemand              ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum = "CONTENT_ON_DEMAND"
)

// ContentStreamTypeTargetingOptionDetails
// Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.
type ContentStreamTypeTargetingOptionDetails struct {
	ContentStreamType *ContentStreamTypeTargetingOptionDetailsContentStreamTypeEnum `json:"contentStreamType,omitempty"`
}
