package shared

type DuplicateSheetRequest struct {
	InsertSheetIndex *int32  `json:"insertSheetIndex"`
	NewSheetID       *int32  `json:"newSheetId"`
	NewSheetName     *string `json:"newSheetName"`
	SourceSheetID    *int32  `json:"sourceSheetId"`
}
