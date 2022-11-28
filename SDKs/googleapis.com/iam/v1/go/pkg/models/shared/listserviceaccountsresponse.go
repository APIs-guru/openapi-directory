package shared

// ListServiceAccountsResponse
// The service account list response.
type ListServiceAccountsResponse struct {
	Accounts      []ServiceAccount `json:"accounts,omitempty"`
	NextPageToken *string          `json:"nextPageToken,omitempty"`
}
