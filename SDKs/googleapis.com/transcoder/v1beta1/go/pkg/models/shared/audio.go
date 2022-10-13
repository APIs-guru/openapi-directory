package shared

type Audio struct {
	HighBoost *bool    `json:"highBoost"`
	LowBoost  *bool    `json:"lowBoost"`
	Lufs      *float64 `json:"lufs"`
}
