package shared

// GridCoordinate
// A coordinate in a sheet. All indexes are zero-based.
type GridCoordinate struct {
	ColumnIndex *int32 `json:"columnIndex,omitempty"`
	RowIndex    *int32 `json:"rowIndex,omitempty"`
	SheetID     *int32 `json:"sheetId,omitempty"`
}
