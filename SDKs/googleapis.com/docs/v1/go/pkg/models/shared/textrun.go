package shared



type TextRun struct {
    Content *string `json:"content,omitempty"`
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInsertionIds []string `json:"suggestedInsertionIds,omitempty"`
    SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
    TextStyle *TextStyle `json:"textStyle,omitempty"`
    
}

