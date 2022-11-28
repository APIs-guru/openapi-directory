package shared

// GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest
// Request message for PurgeUserEvents method.
type GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest struct {
	Filter *string `json:"filter,omitempty"`
	Force  *bool   `json:"force,omitempty"`
}
