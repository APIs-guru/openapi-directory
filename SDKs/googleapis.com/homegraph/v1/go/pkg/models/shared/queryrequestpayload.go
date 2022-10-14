package shared

type QueryRequestPayload struct {
	Devices []AgentDeviceID `json:"devices,omitempty"`
}
