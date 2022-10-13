package shared

type ListBuyersResponse struct {
	Buyers        []Buyer `json:"buyers"`
	NextPageToken *string `json:"nextPageToken"`
}
