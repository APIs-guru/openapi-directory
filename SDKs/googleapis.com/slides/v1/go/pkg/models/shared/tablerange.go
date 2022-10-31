package shared



type TableRange struct {
    ColumnSpan *int32 `json:"columnSpan,omitempty"`
    Location *TableCellLocation `json:"location,omitempty"`
    RowSpan *int32 `json:"rowSpan,omitempty"`
    
}

