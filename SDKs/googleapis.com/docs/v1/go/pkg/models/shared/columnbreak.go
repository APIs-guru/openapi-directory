package shared

// ColumnBreak
// A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
type ColumnBreak struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
