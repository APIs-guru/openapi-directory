package shared

type SuggestedTableCellStyle struct {
	TableCellStyle                *TableCellStyle                `json:"tableCellStyle,omitempty"`
	TableCellStyleSuggestionState *TableCellStyleSuggestionState `json:"tableCellStyleSuggestionState,omitempty"`
}
