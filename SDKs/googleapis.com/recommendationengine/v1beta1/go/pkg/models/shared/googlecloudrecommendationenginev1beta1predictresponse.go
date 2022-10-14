package shared

type GoogleCloudRecommendationengineV1beta1PredictResponse struct {
	DryRun                *bool                                                                   `json:"dryRun,omitempty"`
	ItemsMissingInCatalog []string                                                                `json:"itemsMissingInCatalog,omitempty"`
	Metadata              map[string]interface{}                                                  `json:"metadata,omitempty"`
	NextPageToken         *string                                                                 `json:"nextPageToken,omitempty"`
	RecommendationToken   *string                                                                 `json:"recommendationToken,omitempty"`
	Results               []GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult `json:"results,omitempty"`
}
