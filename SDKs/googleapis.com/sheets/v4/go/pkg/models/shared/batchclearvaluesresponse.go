package shared

// BatchClearValuesResponse
// The response when clearing a range of values in a spreadsheet.
type BatchClearValuesResponse struct {
	ClearedRanges []string `json:"clearedRanges,omitempty"`
	SpreadsheetID *string  `json:"spreadsheetId,omitempty"`
}
