package shared

// SyncRequest
// Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
type SyncRequest struct {
	AgentUserID *string `json:"agentUserId,omitempty"`
	RequestID   *string `json:"requestId,omitempty"`
}
