package shared

type RequestSyncDevicesRequest struct {
	AgentUserID *string `json:"agentUserId"`
	Async       *bool   `json:"async"`
}
