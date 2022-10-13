package shared

type ItemUpdate struct {
	ConfigRequest   map[string]interface{} `json:"config_request"`
	Custom          *interface{}           `json:"custom"`
	Label           *string                `json:"label"`
	LocationRequest *string                `json:"location_request"`
	Metadata        map[string]interface{} `json:"metadata"`
}
