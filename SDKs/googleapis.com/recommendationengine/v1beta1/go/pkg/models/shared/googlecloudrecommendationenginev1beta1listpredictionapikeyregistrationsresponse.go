package shared

// GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse
// Response message for the `ListPredictionApiKeyRegistrations`.
type GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse struct {
	NextPageToken                 *string                                                              `json:"nextPageToken,omitempty"`
	PredictionAPIKeyRegistrations []GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration `json:"predictionApiKeyRegistrations,omitempty"`
}
