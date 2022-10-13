package shared

type TableRange struct {
	ColumnSpan *int32             `json:"columnSpan"`
	Location   *TableCellLocation `json:"location"`
	RowSpan    *int32             `json:"rowSpan"`
}
