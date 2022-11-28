package shared

// SuggestedTableCellStyle
// A suggested change to a TableCellStyle.
type SuggestedTableCellStyle struct {
	TableCellStyle                *TableCellStyle                `json:"tableCellStyle,omitempty"`
	TableCellStyleSuggestionState *TableCellStyleSuggestionState `json:"tableCellStyleSuggestionState,omitempty"`
}
