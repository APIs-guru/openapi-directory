package shared

type BatchClearValuesByDataFilterResponse struct {
	ClearedRanges []string `json:"clearedRanges,omitempty"`
	SpreadsheetID *string  `json:"spreadsheetId,omitempty"`
}
