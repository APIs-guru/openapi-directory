package shared

// Reservation
// Metadata about a reservation resource.
type Reservation struct {
	Name               *string `json:"name,omitempty"`
	ThroughputCapacity *string `json:"throughputCapacity,omitempty"`
}
