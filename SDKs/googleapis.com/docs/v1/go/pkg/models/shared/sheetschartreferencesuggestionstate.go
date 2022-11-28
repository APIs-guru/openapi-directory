package shared

// SheetsChartReferenceSuggestionState
// A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
type SheetsChartReferenceSuggestionState struct {
	ChartIDSuggested       *bool `json:"chartIdSuggested,omitempty"`
	SpreadsheetIDSuggested *bool `json:"spreadsheetIdSuggested,omitempty"`
}
