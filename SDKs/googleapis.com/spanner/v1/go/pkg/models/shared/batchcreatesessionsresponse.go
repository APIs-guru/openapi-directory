package shared

// BatchCreateSessionsResponse
// The response for BatchCreateSessions.
type BatchCreateSessionsResponse struct {
	Session []Session `json:"session,omitempty"`
}
