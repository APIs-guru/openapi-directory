package shared

type BatchClearValuesByDataFilterResponse struct {
	ClearedRanges []string `json:"clearedRanges"`
	SpreadsheetID *string  `json:"spreadsheetId"`
}
