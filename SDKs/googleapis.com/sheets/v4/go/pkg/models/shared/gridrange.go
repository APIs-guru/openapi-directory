package shared

type GridRange struct {
	EndColumnIndex   *int32 `json:"endColumnIndex"`
	EndRowIndex      *int32 `json:"endRowIndex"`
	SheetID          *int32 `json:"sheetId"`
	StartColumnIndex *int32 `json:"startColumnIndex"`
	StartRowIndex    *int32 `json:"startRowIndex"`
}
