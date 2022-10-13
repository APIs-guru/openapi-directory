package shared

type PowerPort struct {
	ConnectionStatus *bool              `json:"connection_status"`
	Device           NestedDevice       `json:"device"`
	ID               *int64             `json:"id"`
	Name             string             `json:"name"`
	PowerOutlet      *NestedPowerOutlet `json:"power_outlet"`
	Tags             []string           `json:"tags"`
}
