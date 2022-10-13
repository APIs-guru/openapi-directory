package shared

type TableRange struct {
	ColumnSpan        *int32             `json:"columnSpan"`
	RowSpan           *int32             `json:"rowSpan"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation"`
}
