package shared

type GoogleCloudRecommendationengineV1beta1PredictResponse struct {
	DryRun                *bool                                                                   `json:"dryRun"`
	ItemsMissingInCatalog []string                                                                `json:"itemsMissingInCatalog"`
	Metadata              map[string]interface{}                                                  `json:"metadata"`
	NextPageToken         *string                                                                 `json:"nextPageToken"`
	RecommendationToken   *string                                                                 `json:"recommendationToken"`
	Results               []GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult `json:"results"`
}
