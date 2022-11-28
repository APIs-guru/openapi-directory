package shared

// InlineObject
// An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
type InlineObject struct {
	InlineObjectProperties                 *InlineObjectProperties                    `json:"inlineObjectProperties,omitempty"`
	ObjectID                               *string                                    `json:"objectId,omitempty"`
	SuggestedDeletionIds                   []string                                   `json:"suggestedDeletionIds,omitempty"`
	SuggestedInlineObjectPropertiesChanges map[string]SuggestedInlineObjectProperties `json:"suggestedInlineObjectPropertiesChanges,omitempty"`
	SuggestedInsertionID                   *string                                    `json:"suggestedInsertionId,omitempty"`
}
