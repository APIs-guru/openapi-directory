package shared

type PositionedObject struct {
	ObjectID                                   *string                                        `json:"objectId"`
	PositionedObjectProperties                 *PositionedObjectProperties                    `json:"positionedObjectProperties"`
	SuggestedDeletionIds                       []string                                       `json:"suggestedDeletionIds"`
	SuggestedInsertionID                       *string                                        `json:"suggestedInsertionId"`
	SuggestedPositionedObjectPropertiesChanges map[string]SuggestedPositionedObjectProperties `json:"suggestedPositionedObjectPropertiesChanges"`
}
