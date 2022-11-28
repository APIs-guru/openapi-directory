package shared

// AppendCellsRequest
// Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
type AppendCellsRequest struct {
	Fields  *string   `json:"fields,omitempty"`
	Rows    []RowData `json:"rows,omitempty"`
	SheetID *int32    `json:"sheetId,omitempty"`
}
