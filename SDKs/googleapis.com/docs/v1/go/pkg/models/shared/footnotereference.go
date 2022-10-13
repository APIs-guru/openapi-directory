package shared

type FootnoteReference struct {
	FootnoteID                *string                       `json:"footnoteId"`
	FootnoteNumber            *string                       `json:"footnoteNumber"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges"`
	TextStyle                 *TextStyle                    `json:"textStyle"`
}
