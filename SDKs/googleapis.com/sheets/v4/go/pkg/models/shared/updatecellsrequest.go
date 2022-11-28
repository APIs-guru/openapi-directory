package shared

// UpdateCellsRequest
// Updates all cells in a range with new data.
type UpdateCellsRequest struct {
	Fields *string         `json:"fields,omitempty"`
	Range  *GridRange      `json:"range,omitempty"`
	Rows   []RowData       `json:"rows,omitempty"`
	Start  *GridCoordinate `json:"start,omitempty"`
}
