package shared



type PositionedObject struct {
    ObjectID *string `json:"objectId,omitempty"`
    PositionedObjectProperties *PositionedObjectProperties `json:"positionedObjectProperties,omitempty"`
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInsertionID *string `json:"suggestedInsertionId,omitempty"`
    SuggestedPositionedObjectPropertiesChanges map[string]SuggestedPositionedObjectProperties `json:"suggestedPositionedObjectPropertiesChanges,omitempty"`
    
}

