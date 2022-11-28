package shared

// SasPortalFrequencyRange
// Frequency range from `low_frequency` to `high_frequency`.
type SasPortalFrequencyRange struct {
	HighFrequencyMhz *float64 `json:"highFrequencyMhz,omitempty"`
	LowFrequencyMhz  *float64 `json:"lowFrequencyMhz,omitempty"`
}
