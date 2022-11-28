package shared

// BatchClearValuesByDataFilterResponse
// The response when clearing a range of values selected with DataFilters in a spreadsheet.
type BatchClearValuesByDataFilterResponse struct {
	ClearedRanges []string `json:"clearedRanges,omitempty"`
	SpreadsheetID *string  `json:"spreadsheetId,omitempty"`
}
