package shared

// BatchCreateSessionsRequestInput
// The request for BatchCreateSessions.
type BatchCreateSessionsRequestInput struct {
	SessionCount    *int32        `json:"sessionCount,omitempty"`
	SessionTemplate *SessionInput `json:"sessionTemplate,omitempty"`
}
