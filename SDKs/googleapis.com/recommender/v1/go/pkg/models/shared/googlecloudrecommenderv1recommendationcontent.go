package shared

type GoogleCloudRecommenderV1RecommendationContent struct {
	OperationGroups []GoogleCloudRecommenderV1OperationGroup `json:"operationGroups"`
	Overview        map[string]interface{}                   `json:"overview"`
}
