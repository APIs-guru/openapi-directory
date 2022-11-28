package shared

// DeleteTableColumnRequest
// Deletes a column from a table.
type DeleteTableColumnRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation,omitempty"`
	TableObjectID *string            `json:"tableObjectId,omitempty"`
}
