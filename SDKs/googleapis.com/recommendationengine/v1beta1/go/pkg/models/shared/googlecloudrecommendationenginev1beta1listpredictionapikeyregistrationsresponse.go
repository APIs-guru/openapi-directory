package shared

type GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse struct {
	NextPageToken                 *string                                                              `json:"nextPageToken"`
	PredictionAPIKeyRegistrations []GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration `json:"predictionApiKeyRegistrations"`
}
