package shared

type ListProductsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Products      []Product `json:"products,omitempty"`
}
