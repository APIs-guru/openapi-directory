package shared

// GoogleCloudVisionV1p2beta1ProductSearchResultsResult
// Information about a product.
type GoogleCloudVisionV1p2beta1ProductSearchResultsResult struct {
	Image   *string                            `json:"image,omitempty"`
	Product *GoogleCloudVisionV1p2beta1Product `json:"product,omitempty"`
	Score   *float32                           `json:"score,omitempty"`
}
