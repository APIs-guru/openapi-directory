package shared

type TableCellLocation struct {
	ColumnIndex *int32 `json:"columnIndex"`
	RowIndex    *int32 `json:"rowIndex"`
}
