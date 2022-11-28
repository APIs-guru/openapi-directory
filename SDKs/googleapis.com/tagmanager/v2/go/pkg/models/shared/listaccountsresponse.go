package shared

// ListAccountsResponse
// List Accounts Response.
type ListAccountsResponse struct {
	Account       []Account `json:"account,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
