package shared

type ItemUpdate struct {
	ConfigRequest   map[string]interface{} `json:"config_request,omitempty"`
	Custom          *interface{}           `json:"custom,omitempty"`
	Label           *string                `json:"label,omitempty"`
	LocationRequest *string                `json:"location_request,omitempty"`
	Metadata        map[string]interface{} `json:"metadata,omitempty"`
}
