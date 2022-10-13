package shared

type TableCell struct {
	ColumnSpan          *int32               `json:"columnSpan"`
	Location            *TableCellLocation   `json:"location"`
	RowSpan             *int32               `json:"rowSpan"`
	TableCellProperties *TableCellProperties `json:"tableCellProperties"`
	Text                *TextContent         `json:"text"`
}
