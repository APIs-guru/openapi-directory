package shared

// ListProductsInProductSetResponse
// Response message for the `ListProductsInProductSet` method.
type ListProductsInProductSetResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Products      []Product `json:"products,omitempty"`
}
