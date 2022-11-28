package shared

// ListSkusResponse
// Response message for `ListSkus`.
type ListSkusResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Skus          []Sku   `json:"skus,omitempty"`
}
