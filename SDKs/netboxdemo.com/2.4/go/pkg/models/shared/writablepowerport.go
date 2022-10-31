package shared

type WritablePowerPort struct {
	ConnectionStatus *bool    `json:"connection_status,omitempty"`
	Device           int64    `json:"device"`
	ID               *int64   `json:"id,omitempty"`
	Name             string   `json:"name"`
	PowerOutlet      *int64   `json:"power_outlet,omitempty"`
	Tags             []string `json:"tags,omitempty"`
}
