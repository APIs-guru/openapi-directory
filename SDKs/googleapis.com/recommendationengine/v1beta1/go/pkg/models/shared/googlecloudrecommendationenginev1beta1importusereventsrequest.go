package shared

// GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest
// Request message for the ImportUserEvents request.
type GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest struct {
	ErrorsConfig *GoogleCloudRecommendationengineV1beta1ImportErrorsConfig `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRecommendationengineV1beta1InputConfig        `json:"inputConfig,omitempty"`
	RequestID    *string                                                   `json:"requestId,omitempty"`
}
