package shared

// PositionedObject
// An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
type PositionedObject struct {
	ObjectID                                   *string                                        `json:"objectId,omitempty"`
	PositionedObjectProperties                 *PositionedObjectProperties                    `json:"positionedObjectProperties,omitempty"`
	SuggestedDeletionIds                       []string                                       `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionID                       *string                                        `json:"suggestedInsertionId,omitempty"`
	SuggestedPositionedObjectPropertiesChanges map[string]SuggestedPositionedObjectProperties `json:"suggestedPositionedObjectPropertiesChanges,omitempty"`
}
