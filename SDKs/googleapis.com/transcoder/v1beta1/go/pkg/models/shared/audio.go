package shared

type Audio struct {
	HighBoost *bool    `json:"highBoost,omitempty"`
	LowBoost  *bool    `json:"lowBoost,omitempty"`
	Lufs      *float64 `json:"lufs,omitempty"`
}
