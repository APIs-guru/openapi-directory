package shared

// InsertTableColumnRequest
// Inserts an empty column into a table.
type InsertTableColumnRequest struct {
	InsertRight       *bool              `json:"insertRight,omitempty"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
