package shared

// ListProductsResponse
// Response message for the `ListProducts` method.
type ListProductsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Products      []Product `json:"products,omitempty"`
}
