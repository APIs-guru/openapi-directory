package shared

// TableCellLocation
// A location of a single table cell within a table.
type TableCellLocation struct {
	ColumnIndex *int32 `json:"columnIndex,omitempty"`
	RowIndex    *int32 `json:"rowIndex,omitempty"`
}
