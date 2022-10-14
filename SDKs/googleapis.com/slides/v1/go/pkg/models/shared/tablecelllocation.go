package shared

type TableCellLocation struct {
	ColumnIndex *int32 `json:"columnIndex,omitempty"`
	RowIndex    *int32 `json:"rowIndex,omitempty"`
}
