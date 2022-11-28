package shared

// DeleteTableRowRequest
// Deletes a row from a table.
type DeleteTableRowRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation,omitempty"`
	TableObjectID *string            `json:"tableObjectId,omitempty"`
}
