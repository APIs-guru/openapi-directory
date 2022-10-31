package shared

type Equation struct {
	SuggestedDeletionIds  []string `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds []string `json:"suggestedInsertionIds,omitempty"`
}
