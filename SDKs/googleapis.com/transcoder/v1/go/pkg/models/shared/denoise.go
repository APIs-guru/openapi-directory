package shared

// Denoise
// Denoise preprocessing configuration. **Note:** This configuration is not supported.
type Denoise struct {
	Strength *float64 `json:"strength,omitempty"`
	Tune     *string  `json:"tune,omitempty"`
}
