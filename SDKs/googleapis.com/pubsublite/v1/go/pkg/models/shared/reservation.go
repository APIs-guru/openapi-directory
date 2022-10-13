package shared

type Reservation struct {
	Name               *string `json:"name"`
	ThroughputCapacity *string `json:"throughputCapacity"`
}
