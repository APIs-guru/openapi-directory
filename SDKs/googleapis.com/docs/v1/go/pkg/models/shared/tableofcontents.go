package shared

type TableOfContents struct {
	Content               []StructuralElement `json:"content"`
	SuggestedDeletionIds  []string            `json:"suggestedDeletionIds"`
	SuggestedInsertionIds []string            `json:"suggestedInsertionIds"`
}
