package shared

// DeleteTableColumnRequest
// Deletes a column from a table.
type DeleteTableColumnRequest struct {
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
