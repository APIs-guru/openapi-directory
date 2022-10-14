package shared

type AccountstatusesListResponse struct {
	Kind          *string         `json:"kind,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Resources     []AccountStatus `json:"resources,omitempty"`
}
