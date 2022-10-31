package shared

type DeleteTableColumnRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation,omitempty"`
	TableObjectID *string            `json:"tableObjectId,omitempty"`
}
