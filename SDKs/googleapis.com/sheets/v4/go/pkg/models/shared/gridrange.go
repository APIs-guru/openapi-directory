package shared

type GridRange struct {
	EndColumnIndex   *int32 `json:"endColumnIndex,omitempty"`
	EndRowIndex      *int32 `json:"endRowIndex,omitempty"`
	SheetID          *int32 `json:"sheetId,omitempty"`
	StartColumnIndex *int32 `json:"startColumnIndex,omitempty"`
	StartRowIndex    *int32 `json:"startRowIndex,omitempty"`
}
