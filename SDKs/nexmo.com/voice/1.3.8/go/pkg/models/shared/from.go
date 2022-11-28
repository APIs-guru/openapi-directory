package shared

// From
// The endpoint you called from. Possible values are the same as `to`.
type From struct {
	Number *string `json:"number,omitempty"`
	Type   *string `json:"type,omitempty"`
}
