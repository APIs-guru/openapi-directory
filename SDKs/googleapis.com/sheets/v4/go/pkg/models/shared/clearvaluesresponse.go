package shared

// ClearValuesResponse
// The response when clearing a range of values in a spreadsheet.
type ClearValuesResponse struct {
	ClearedRange  *string `json:"clearedRange,omitempty"`
	SpreadsheetID *string `json:"spreadsheetId,omitempty"`
}
