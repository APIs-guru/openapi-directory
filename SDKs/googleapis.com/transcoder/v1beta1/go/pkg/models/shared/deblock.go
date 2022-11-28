package shared

// Deblock
// Deblock preprocessing configuration.
type Deblock struct {
	Enabled  *bool    `json:"enabled,omitempty"`
	Strength *float64 `json:"strength,omitempty"`
}
