package shared

type ListAccountsResponse struct {
	Account       []Account `json:"account,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
