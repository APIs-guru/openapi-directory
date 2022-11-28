package shared

// Equation
// A ParagraphElement representing an equation.
type Equation struct {
	SuggestedDeletionIds  []string `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds []string `json:"suggestedInsertionIds,omitempty"`
}
