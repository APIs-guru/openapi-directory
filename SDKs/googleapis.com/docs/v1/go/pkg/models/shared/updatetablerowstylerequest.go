package shared

type UpdateTableRowStyleRequest struct {
	Fields             *string        `json:"fields"`
	RowIndices         []int32        `json:"rowIndices"`
	TableRowStyle      *TableRowStyle `json:"tableRowStyle"`
	TableStartLocation *Location      `json:"tableStartLocation"`
}
