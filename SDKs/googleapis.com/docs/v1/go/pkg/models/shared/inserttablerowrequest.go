package shared

// InsertTableRowRequest
// Inserts an empty row into a table.
type InsertTableRowRequest struct {
	InsertBelow       *bool              `json:"insertBelow,omitempty"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
