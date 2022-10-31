package shared



type RequestSyncDevicesRequest struct {
    AgentUserID *string `json:"agentUserId,omitempty"`
    Async *bool `json:"async,omitempty"`
    
}

