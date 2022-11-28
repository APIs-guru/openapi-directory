package shared

// GoogleCloudRecommenderV1beta1RecommendationContent
// Contains what resources are changing and how they are changing.
type GoogleCloudRecommenderV1beta1RecommendationContent struct {
	OperationGroups []GoogleCloudRecommenderV1beta1OperationGroup `json:"operationGroups,omitempty"`
	Overview        map[string]interface{}                        `json:"overview,omitempty"`
}
