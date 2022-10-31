package shared

type SandboxStatement struct {
	Month  *int32  `json:"month,omitempty"`
	Number *string `json:"number,omitempty"`
	Year   *int32  `json:"year,omitempty"`
}
