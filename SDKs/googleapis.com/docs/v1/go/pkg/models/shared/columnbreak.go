package shared



type ColumnBreak struct {
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInsertionIds []string `json:"suggestedInsertionIds,omitempty"`
    SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
    TextStyle *TextStyle `json:"textStyle,omitempty"`
    
}

