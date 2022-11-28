package shared

// ListBiddersResponse
// A response containing bidders.
type ListBiddersResponse struct {
	Bidders       []Bidder `json:"bidders,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
