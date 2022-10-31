package shared

type RelVelocity struct {
	KilometersPerHour *string `json:"kilometers_per_hour,omitempty"`
	MilesPerHour      *string `json:"miles_per_hour,omitempty"`
}
