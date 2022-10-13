package shared

type InsertTableRowsRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation"`
	InsertBelow   *bool              `json:"insertBelow"`
	Number        *int32             `json:"number"`
	TableObjectID *string            `json:"tableObjectId"`
}
