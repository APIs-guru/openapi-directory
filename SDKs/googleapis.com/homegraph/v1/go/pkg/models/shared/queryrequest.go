package shared

// QueryRequest
// Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
type QueryRequest struct {
	AgentUserID *string             `json:"agentUserId,omitempty"`
	Inputs      []QueryRequestInput `json:"inputs,omitempty"`
	RequestID   *string             `json:"requestId,omitempty"`
}
