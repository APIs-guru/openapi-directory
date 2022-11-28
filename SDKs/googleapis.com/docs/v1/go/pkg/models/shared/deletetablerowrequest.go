package shared

// DeleteTableRowRequest
// Deletes a row from a table.
type DeleteTableRowRequest struct {
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
