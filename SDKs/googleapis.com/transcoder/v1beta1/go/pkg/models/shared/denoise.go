package shared

// Denoise
// Denoise preprocessing configuration.
type Denoise struct {
	Strength *float64 `json:"strength,omitempty"`
	Tune     *string  `json:"tune,omitempty"`
}
