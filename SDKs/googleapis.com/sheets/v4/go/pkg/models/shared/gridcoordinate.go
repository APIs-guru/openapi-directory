package shared

type GridCoordinate struct {
	ColumnIndex *int32 `json:"columnIndex,omitempty"`
	RowIndex    *int32 `json:"rowIndex,omitempty"`
	SheetID     *int32 `json:"sheetId,omitempty"`
}
