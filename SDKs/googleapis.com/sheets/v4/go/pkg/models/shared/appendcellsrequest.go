package shared



type AppendCellsRequest struct {
    Fields *string `json:"fields,omitempty"`
    Rows []RowData `json:"rows,omitempty"`
    SheetID *int32 `json:"sheetId,omitempty"`
    
}

