package shared

// PageBreak
// A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
type PageBreak struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
