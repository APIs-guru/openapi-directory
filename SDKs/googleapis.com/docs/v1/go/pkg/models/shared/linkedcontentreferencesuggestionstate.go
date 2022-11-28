package shared

// LinkedContentReferenceSuggestionState
// A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
type LinkedContentReferenceSuggestionState struct {
	SheetsChartReferenceSuggestionState *SheetsChartReferenceSuggestionState `json:"sheetsChartReferenceSuggestionState,omitempty"`
}
