package shared

type DuplicateSheetRequest struct {
	InsertSheetIndex *int32  `json:"insertSheetIndex,omitempty"`
	NewSheetID       *int32  `json:"newSheetId,omitempty"`
	NewSheetName     *string `json:"newSheetName,omitempty"`
	SourceSheetID    *int32  `json:"sourceSheetId,omitempty"`
}
