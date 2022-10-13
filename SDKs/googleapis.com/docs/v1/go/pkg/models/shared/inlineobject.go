package shared

type InlineObject struct {
	InlineObjectProperties                 *InlineObjectProperties                    `json:"inlineObjectProperties"`
	ObjectID                               *string                                    `json:"objectId"`
	SuggestedDeletionIds                   []string                                   `json:"suggestedDeletionIds"`
	SuggestedInlineObjectPropertiesChanges map[string]SuggestedInlineObjectProperties `json:"suggestedInlineObjectPropertiesChanges"`
	SuggestedInsertionID                   *string                                    `json:"suggestedInsertionId"`
}
