package shared

type GoogleCloudVisionV1p2beta1ProductSearchResultsResult struct {
	Image   *string                            `json:"image"`
	Product *GoogleCloudVisionV1p2beta1Product `json:"product"`
	Score   *float32                           `json:"score"`
}
