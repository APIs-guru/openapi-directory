package shared

type TableRange struct {
	ColumnSpan        *int32             `json:"columnSpan,omitempty"`
	RowSpan           *int32             `json:"rowSpan,omitempty"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
