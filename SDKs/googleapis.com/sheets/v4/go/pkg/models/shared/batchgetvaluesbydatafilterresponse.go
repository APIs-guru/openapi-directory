package shared

// BatchGetValuesByDataFilterResponse
// The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
type BatchGetValuesByDataFilterResponse struct {
	SpreadsheetID *string             `json:"spreadsheetId,omitempty"`
	ValueRanges   []MatchedValueRange `json:"valueRanges,omitempty"`
}
