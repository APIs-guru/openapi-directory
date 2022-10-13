package shared

type DeleteTableRowRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation"`
	TableObjectID *string            `json:"tableObjectId"`
}
