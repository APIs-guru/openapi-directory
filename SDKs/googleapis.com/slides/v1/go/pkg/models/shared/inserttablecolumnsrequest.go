package shared

type InsertTableColumnsRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation"`
	InsertRight   *bool              `json:"insertRight"`
	Number        *int32             `json:"number"`
	TableObjectID *string            `json:"tableObjectId"`
}
