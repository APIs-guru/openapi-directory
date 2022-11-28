package shared

// GoogleCloudRecommenderV1RecommendationContent
// Contains what resources are changing and how they are changing.
type GoogleCloudRecommenderV1RecommendationContent struct {
	OperationGroups []GoogleCloudRecommenderV1OperationGroup `json:"operationGroups,omitempty"`
	Overview        map[string]interface{}                   `json:"overview,omitempty"`
}
