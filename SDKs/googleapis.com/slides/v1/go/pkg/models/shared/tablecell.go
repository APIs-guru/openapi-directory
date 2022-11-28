package shared

// TableCell
// Properties and contents of each table cell.
type TableCell struct {
	ColumnSpan          *int32               `json:"columnSpan,omitempty"`
	Location            *TableCellLocation   `json:"location,omitempty"`
	RowSpan             *int32               `json:"rowSpan,omitempty"`
	TableCellProperties *TableCellProperties `json:"tableCellProperties,omitempty"`
	Text                *TextContent         `json:"text,omitempty"`
}
