package shared

type Reservation struct {
	Name               *string `json:"name,omitempty"`
	ThroughputCapacity *string `json:"throughputCapacity,omitempty"`
}
