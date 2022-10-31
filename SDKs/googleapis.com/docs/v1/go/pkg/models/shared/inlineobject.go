package shared



type InlineObject struct {
    InlineObjectProperties *InlineObjectProperties `json:"inlineObjectProperties,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInlineObjectPropertiesChanges map[string]SuggestedInlineObjectProperties `json:"suggestedInlineObjectPropertiesChanges,omitempty"`
    SuggestedInsertionID *string `json:"suggestedInsertionId,omitempty"`
    
}

