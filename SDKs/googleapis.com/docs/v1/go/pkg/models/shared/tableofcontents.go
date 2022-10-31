package shared



type TableOfContents struct {
    Content []StructuralElement `json:"content,omitempty"`
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInsertionIds []string `json:"suggestedInsertionIds,omitempty"`
    
}

