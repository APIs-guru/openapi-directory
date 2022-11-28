package shared

// Cursor
// A position in a query result set.
type Cursor struct {
	Before *bool   `json:"before,omitempty"`
	Values []Value `json:"values,omitempty"`
}
