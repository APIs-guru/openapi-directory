package shared

type QueryResponsePayload struct {
	Devices map[string]map[string]interface{} `json:"devices,omitempty"`
}
