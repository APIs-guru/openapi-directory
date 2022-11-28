package shared

// ListAccountsResponse
// Response message for Accounts.ListAccounts.
type ListAccountsResponse struct {
	Accounts      []Account `json:"accounts,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
