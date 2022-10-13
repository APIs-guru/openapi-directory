package shared

type List struct {
	ListProperties                 *ListProperties                    `json:"listProperties"`
	SuggestedDeletionIds           []string                           `json:"suggestedDeletionIds"`
	SuggestedInsertionID           *string                            `json:"suggestedInsertionId"`
	SuggestedListPropertiesChanges map[string]SuggestedListProperties `json:"suggestedListPropertiesChanges"`
}
