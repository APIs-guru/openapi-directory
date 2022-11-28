package shared

// ListSessionsResponse
// The response for ListSessions.
type ListSessionsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Sessions      []Session `json:"sessions,omitempty"`
}
