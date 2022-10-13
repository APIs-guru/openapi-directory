package shared

type ListBiddersResponse struct {
	Bidders       []Bidder `json:"bidders"`
	NextPageToken *string  `json:"nextPageToken"`
}
