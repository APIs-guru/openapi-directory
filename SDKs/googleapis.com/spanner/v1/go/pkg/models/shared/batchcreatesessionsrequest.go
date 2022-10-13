package shared

type BatchCreateSessionsRequest struct {
	SessionCount    *int32   `json:"sessionCount"`
	SessionTemplate *Session `json:"sessionTemplate"`
}
