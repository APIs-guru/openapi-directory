package shared

type GridCoordinate struct {
	ColumnIndex *int32 `json:"columnIndex"`
	RowIndex    *int32 `json:"rowIndex"`
	SheetID     *int32 `json:"sheetId"`
}
