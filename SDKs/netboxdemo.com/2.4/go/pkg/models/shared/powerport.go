package shared

type PowerPort struct {
	ConnectionStatus *bool              `json:"connection_status,omitempty"`
	Device           NestedDevice       `json:"device"`
	ID               *int64             `json:"id,omitempty"`
	Name             string             `json:"name"`
	PowerOutlet      *NestedPowerOutlet `json:"power_outlet,omitempty"`
	Tags             []string           `json:"tags,omitempty"`
}
