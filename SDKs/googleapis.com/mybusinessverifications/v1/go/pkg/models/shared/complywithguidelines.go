package shared

type ComplyWithGuidelinesRecommendationReasonEnum string

const (
	ComplyWithGuidelinesRecommendationReasonEnumRecommendationReasonUnspecified ComplyWithGuidelinesRecommendationReasonEnum = "RECOMMENDATION_REASON_UNSPECIFIED"
	ComplyWithGuidelinesRecommendationReasonEnumBusinessLocationSuspended       ComplyWithGuidelinesRecommendationReasonEnum = "BUSINESS_LOCATION_SUSPENDED"
	ComplyWithGuidelinesRecommendationReasonEnumBusinessLocationDisabled        ComplyWithGuidelinesRecommendationReasonEnum = "BUSINESS_LOCATION_DISABLED"
)

// ComplyWithGuidelines
// Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
type ComplyWithGuidelines struct {
	RecommendationReason *ComplyWithGuidelinesRecommendationReasonEnum `json:"recommendationReason,omitempty"`
}
