package shared

// InsertTableColumnsRequest
// Inserts columns into a table. Other columns in the table will be resized to fit the new column.
type InsertTableColumnsRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation,omitempty"`
	InsertRight   *bool              `json:"insertRight,omitempty"`
	Number        *int32             `json:"number,omitempty"`
	TableObjectID *string            `json:"tableObjectId,omitempty"`
}
