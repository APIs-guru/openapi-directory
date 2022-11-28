package shared

// GoogleCloudRetailV2alphaListProductsResponse
// Response message for ProductService.ListProducts method.
type GoogleCloudRetailV2alphaListProductsResponse struct {
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
	Products      []GoogleCloudRetailV2alphaProduct `json:"products,omitempty"`
	TotalSize     *int32                            `json:"totalSize,omitempty"`
}
