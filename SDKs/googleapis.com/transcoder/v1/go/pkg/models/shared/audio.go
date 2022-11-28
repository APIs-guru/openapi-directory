package shared

// Audio
// Audio preprocessing configuration.
type Audio struct {
	HighBoost *bool    `json:"highBoost,omitempty"`
	LowBoost  *bool    `json:"lowBoost,omitempty"`
	Lufs      *float64 `json:"lufs,omitempty"`
}
