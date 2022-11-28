package shared

// QueryResponsePayload
// Payload containing device states information.
type QueryResponsePayload struct {
	Devices map[string]map[string]interface{} `json:"devices,omitempty"`
}
