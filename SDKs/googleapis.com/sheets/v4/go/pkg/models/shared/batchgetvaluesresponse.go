package shared

// BatchGetValuesResponse
// The response when retrieving more than one range of values in a spreadsheet.
type BatchGetValuesResponse struct {
	SpreadsheetID *string      `json:"spreadsheetId,omitempty"`
	ValueRanges   []ValueRange `json:"valueRanges,omitempty"`
}
