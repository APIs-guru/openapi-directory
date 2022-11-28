package shared

// List
// A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
type List struct {
	ListProperties                 *ListProperties                    `json:"listProperties,omitempty"`
	SuggestedDeletionIds           []string                           `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionID           *string                            `json:"suggestedInsertionId,omitempty"`
	SuggestedListPropertiesChanges map[string]SuggestedListProperties `json:"suggestedListPropertiesChanges,omitempty"`
}
