package shared

type ListHoldsResponse struct {
	Holds         []Hold  `json:"holds"`
	NextPageToken *string `json:"nextPageToken"`
}
