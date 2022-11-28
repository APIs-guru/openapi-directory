package shared

// FootnoteReference
// A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
type FootnoteReference struct {
	FootnoteID                *string                       `json:"footnoteId,omitempty"`
	FootnoteNumber            *string                       `json:"footnoteNumber,omitempty"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
