package shared

// Write
// Arguments to insert, update, insert_or_update, and replace operations.
type Write struct {
	Columns []string        `json:"columns,omitempty"`
	Table   *string         `json:"table,omitempty"`
	Values  [][]interface{} `json:"values,omitempty"`
}
