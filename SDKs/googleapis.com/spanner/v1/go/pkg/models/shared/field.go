package shared

// Field
// Message representing a single field of a struct.
type Field struct {
	Name *string `json:"name,omitempty"`
	Type *Type   `json:"type,omitempty"`
}
