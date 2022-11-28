package shared

// Projection
// The projection of document's fields to return.
type Projection struct {
	Fields []FieldReference `json:"fields,omitempty"`
}
