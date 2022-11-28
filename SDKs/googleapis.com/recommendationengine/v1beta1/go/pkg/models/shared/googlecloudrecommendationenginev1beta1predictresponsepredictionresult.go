package shared

// GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult
// PredictionResult represents the recommendation prediction results.
type GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult struct {
	ID           *string                `json:"id,omitempty"`
	ItemMetadata map[string]interface{} `json:"itemMetadata,omitempty"`
}
