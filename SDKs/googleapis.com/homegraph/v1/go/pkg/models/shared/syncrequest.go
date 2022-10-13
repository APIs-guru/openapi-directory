package shared

type SyncRequest struct {
	AgentUserID *string `json:"agentUserId"`
	RequestID   *string `json:"requestId"`
}
