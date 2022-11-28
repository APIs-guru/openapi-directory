package shared

// GoogleCloudRetailV2betaListProductsResponse
// Response message for ProductService.ListProducts method.
type GoogleCloudRetailV2betaListProductsResponse struct {
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
	Products      []GoogleCloudRetailV2betaProduct `json:"products,omitempty"`
}
