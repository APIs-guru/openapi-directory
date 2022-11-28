package shared

// ReplaceAllTextRequest
// Replaces all instances of text matching a criteria with replace text.
type ReplaceAllTextRequest struct {
	ContainsText  *SubstringMatchCriteria `json:"containsText,omitempty"`
	PageObjectIds []string                `json:"pageObjectIds,omitempty"`
	ReplaceText   *string                 `json:"replaceText,omitempty"`
}
