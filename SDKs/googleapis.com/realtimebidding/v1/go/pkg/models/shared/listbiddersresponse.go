package shared

type ListBiddersResponse struct {
	Bidders       []Bidder `json:"bidders,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
