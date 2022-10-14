package shared

type SyncResponsePayload struct {
	AgentUserID *string  `json:"agentUserId,omitempty"`
	Devices     []Device `json:"devices,omitempty"`
}
