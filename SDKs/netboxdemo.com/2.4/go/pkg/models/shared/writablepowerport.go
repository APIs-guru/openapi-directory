package shared

type WritablePowerPort struct {
	ConnectionStatus *bool    `json:"connection_status"`
	Device           int64    `json:"device"`
	ID               *int64   `json:"id"`
	Name             string   `json:"name"`
	PowerOutlet      *int64   `json:"power_outlet"`
	Tags             []string `json:"tags"`
}
