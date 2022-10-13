package shared

type InlineObjectElement struct {
	InlineObjectID            *string                       `json:"inlineObjectId"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges"`
	TextStyle                 *TextStyle                    `json:"textStyle"`
}
