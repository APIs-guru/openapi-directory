package shared

// Hash
// Container message for hash values.
type Hash struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
