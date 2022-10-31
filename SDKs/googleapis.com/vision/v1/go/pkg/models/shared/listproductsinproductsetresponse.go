package shared

type ListProductsInProductSetResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Products      []Product `json:"products,omitempty"`
}
