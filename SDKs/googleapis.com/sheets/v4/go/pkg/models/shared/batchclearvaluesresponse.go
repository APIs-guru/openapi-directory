package shared

type BatchClearValuesResponse struct {
	ClearedRanges []string `json:"clearedRanges,omitempty"`
	SpreadsheetID *string  `json:"spreadsheetId,omitempty"`
}
