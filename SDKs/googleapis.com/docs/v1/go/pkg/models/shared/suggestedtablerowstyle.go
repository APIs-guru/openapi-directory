package shared

// SuggestedTableRowStyle
// A suggested change to a TableRowStyle.
type SuggestedTableRowStyle struct {
	TableRowStyle                *TableRowStyle                `json:"tableRowStyle,omitempty"`
	TableRowStyleSuggestionState *TableRowStyleSuggestionState `json:"tableRowStyleSuggestionState,omitempty"`
}
