package shared

// GoogleCloudChannelV1ListProductsResponse
// Response message for ListProducts.
type GoogleCloudChannelV1ListProductsResponse struct {
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
	Products      []GoogleCloudChannelV1Product `json:"products,omitempty"`
}
