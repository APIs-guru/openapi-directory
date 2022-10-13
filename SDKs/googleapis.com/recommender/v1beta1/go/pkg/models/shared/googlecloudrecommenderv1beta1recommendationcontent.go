package shared

type GoogleCloudRecommenderV1beta1RecommendationContent struct {
	OperationGroups []GoogleCloudRecommenderV1beta1OperationGroup `json:"operationGroups"`
	Overview        map[string]interface{}                        `json:"overview"`
}
