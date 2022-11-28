package shared

// GoogleCloudRetailV2ListProductsResponse
// Response message for ProductService.ListProducts method.
type GoogleCloudRetailV2ListProductsResponse struct {
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
	Products      []GoogleCloudRetailV2Product `json:"products,omitempty"`
}
