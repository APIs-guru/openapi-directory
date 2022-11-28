package shared

// Distribution
// Data about the relative number of devices running a given configuration of the Android platform.
type Distribution struct {
	MarketShare     *float64 `json:"marketShare,omitempty"`
	MeasurementTime *string  `json:"measurementTime,omitempty"`
}
