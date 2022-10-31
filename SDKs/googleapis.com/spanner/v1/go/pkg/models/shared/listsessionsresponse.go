package shared

type ListSessionsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Sessions      []Session `json:"sessions,omitempty"`
}
