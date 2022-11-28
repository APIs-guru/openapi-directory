package shared

// ColumnLayout
// A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
type ColumnLayout struct {
	Columns []Column `json:"columns,omitempty"`
}
