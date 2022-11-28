package shared

// QueryRequestPayload
// Payload containing device IDs.
type QueryRequestPayload struct {
	Devices []AgentDeviceID `json:"devices,omitempty"`
}
