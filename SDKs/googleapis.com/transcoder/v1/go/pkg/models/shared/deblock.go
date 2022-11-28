package shared

// Deblock
// Deblock preprocessing configuration. **Note:** This configuration is not supported.
type Deblock struct {
	Enabled  *bool    `json:"enabled,omitempty"`
	Strength *float64 `json:"strength,omitempty"`
}
