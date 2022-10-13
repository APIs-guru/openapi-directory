package shared

type AppendCellsRequest struct {
	Fields  *string   `json:"fields"`
	Rows    []RowData `json:"rows"`
	SheetID *int32    `json:"sheetId"`
}
