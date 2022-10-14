package shared

type SyncRequest struct {
	AgentUserID *string `json:"agentUserId,omitempty"`
	RequestID   *string `json:"requestId,omitempty"`
}
