package shared

type AccountsListResponse struct {
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Resources     []Account `json:"resources,omitempty"`
}
