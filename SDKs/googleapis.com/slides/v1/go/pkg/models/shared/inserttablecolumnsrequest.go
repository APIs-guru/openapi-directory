package shared

type InsertTableColumnsRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation,omitempty"`
	InsertRight   *bool              `json:"insertRight,omitempty"`
	Number        *int32             `json:"number,omitempty"`
	TableObjectID *string            `json:"tableObjectId,omitempty"`
}
