package shared

type WritablePowerPortInput struct {
	ConnectionStatus *bool    `json:"connection_status,omitempty"`
	Device           int64    `json:"device"`
	Name             string   `json:"name"`
	PowerOutlet      *int64   `json:"power_outlet,omitempty"`
	Tags             []string `json:"tags,omitempty"`
}
