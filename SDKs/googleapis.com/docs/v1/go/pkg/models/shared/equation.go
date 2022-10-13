package shared

type Equation struct {
	SuggestedDeletionIds  []string `json:"suggestedDeletionIds"`
	SuggestedInsertionIds []string `json:"suggestedInsertionIds"`
}
