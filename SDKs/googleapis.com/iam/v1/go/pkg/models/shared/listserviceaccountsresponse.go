package shared

type ListServiceAccountsResponse struct {
	Accounts      []ServiceAccount `json:"accounts"`
	NextPageToken *string          `json:"nextPageToken"`
}
