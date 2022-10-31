package shared



type List struct {
    ListProperties *ListProperties `json:"listProperties,omitempty"`
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInsertionID *string `json:"suggestedInsertionId,omitempty"`
    SuggestedListPropertiesChanges map[string]SuggestedListProperties `json:"suggestedListPropertiesChanges,omitempty"`
    
}

