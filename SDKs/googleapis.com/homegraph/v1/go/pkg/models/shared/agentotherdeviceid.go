package shared

// AgentOtherDeviceID
// Alternate third-party device ID.
type AgentOtherDeviceID struct {
	AgentID  *string `json:"agentId,omitempty"`
	DeviceID *string `json:"deviceId,omitempty"`
}
