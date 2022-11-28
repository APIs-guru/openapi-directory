package shared

// InlineObjectElement
// A ParagraphElement that contains an InlineObject.
type InlineObjectElement struct {
	InlineObjectID            *string                       `json:"inlineObjectId,omitempty"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
