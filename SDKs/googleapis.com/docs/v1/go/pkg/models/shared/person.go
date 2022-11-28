package shared

// PersonInput
// A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
type PersonInput struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}

// Person
// A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
type Person struct {
	PersonID                  *string                       `json:"personId,omitempty"`
	PersonProperties          *PersonProperties             `json:"personProperties,omitempty"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
