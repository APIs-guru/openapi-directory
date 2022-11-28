package shared

// ListBuyersResponse
// A response containing buyer account information.
type ListBuyersResponse struct {
	Buyers        []Buyer `json:"buyers,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
