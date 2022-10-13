package shared

type Person struct {
	PersonID                  *string                       `json:"personId"`
	PersonProperties          *PersonProperties             `json:"personProperties"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges"`
	TextStyle                 *TextStyle                    `json:"textStyle"`
}
