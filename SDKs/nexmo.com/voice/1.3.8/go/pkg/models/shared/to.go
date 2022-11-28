package shared

// To
// The single or mixed collection of endpoint types you connected to
type To struct {
	Number *string `json:"number,omitempty"`
	Type   *string `json:"type,omitempty"`
}
