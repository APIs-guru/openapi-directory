package shared

// RequestSyncDevicesRequest
// Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
type RequestSyncDevicesRequest struct {
	AgentUserID *string `json:"agentUserId,omitempty"`
	Async       *bool   `json:"async,omitempty"`
}
