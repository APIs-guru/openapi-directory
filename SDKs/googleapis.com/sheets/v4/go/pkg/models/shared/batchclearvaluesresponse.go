package shared

type BatchClearValuesResponse struct {
	ClearedRanges []string `json:"clearedRanges"`
	SpreadsheetID *string  `json:"spreadsheetId"`
}
