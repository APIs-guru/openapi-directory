package shared

type ListAccountsResponse struct {
	Accounts      []Account `json:"accounts"`
	NextPageToken *string   `json:"nextPageToken"`
}
