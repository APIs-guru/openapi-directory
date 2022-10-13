package shared

type UpdateCellsRequest struct {
	Fields *string         `json:"fields"`
	Range  *GridRange      `json:"range"`
	Rows   []RowData       `json:"rows"`
	Start  *GridCoordinate `json:"start"`
}
