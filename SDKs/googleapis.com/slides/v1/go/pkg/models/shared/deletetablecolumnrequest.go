package shared

type DeleteTableColumnRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation"`
	TableObjectID *string            `json:"tableObjectId"`
}
