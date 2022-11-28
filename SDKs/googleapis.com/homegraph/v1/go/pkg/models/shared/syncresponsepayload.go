package shared

// SyncResponsePayload
// Payload containing device information.
type SyncResponsePayload struct {
	AgentUserID *string  `json:"agentUserId,omitempty"`
	Devices     []Device `json:"devices,omitempty"`
}
