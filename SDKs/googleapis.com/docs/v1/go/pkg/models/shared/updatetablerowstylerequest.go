package shared

// UpdateTableRowStyleRequest
// Updates the TableRowStyle of rows in a table.
type UpdateTableRowStyleRequest struct {
	Fields             *string        `json:"fields,omitempty"`
	RowIndices         []int32        `json:"rowIndices,omitempty"`
	TableRowStyle      *TableRowStyle `json:"tableRowStyle,omitempty"`
	TableStartLocation *Location      `json:"tableStartLocation,omitempty"`
}
