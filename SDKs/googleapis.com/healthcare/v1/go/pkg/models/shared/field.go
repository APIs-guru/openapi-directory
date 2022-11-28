package shared

// Field
// A (sub) field of a type.
type Field struct {
	MaxOccurs *int32  `json:"maxOccurs,omitempty"`
	MinOccurs *int32  `json:"minOccurs,omitempty"`
	Name      *string `json:"name,omitempty"`
	Table     *string `json:"table,omitempty"`
	Type      *string `json:"type,omitempty"`
}
