package shared

type InsertTableRowsRequest struct {
	CellLocation  *TableCellLocation `json:"cellLocation,omitempty"`
	InsertBelow   *bool              `json:"insertBelow,omitempty"`
	Number        *int32             `json:"number,omitempty"`
	TableObjectID *string            `json:"tableObjectId,omitempty"`
}
