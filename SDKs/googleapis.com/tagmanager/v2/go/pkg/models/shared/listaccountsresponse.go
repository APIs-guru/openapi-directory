package shared

type ListAccountsResponse struct {
	Account       []Account `json:"account"`
	NextPageToken *string   `json:"nextPageToken"`
}
