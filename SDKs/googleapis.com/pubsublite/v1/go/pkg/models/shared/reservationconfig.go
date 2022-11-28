package shared

// ReservationConfig
// The settings for this topic's Reservation usage.
type ReservationConfig struct {
	ThroughputReservation *string `json:"throughputReservation,omitempty"`
}
