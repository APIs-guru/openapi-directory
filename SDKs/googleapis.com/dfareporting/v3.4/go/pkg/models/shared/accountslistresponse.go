package shared

type AccountsListResponse struct {
	Accounts      []Account `json:"accounts,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
