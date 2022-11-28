package shared

// ReplaceAllTextRequest
// Replaces all instances of text matching a criteria with replace text.
type ReplaceAllTextRequest struct {
	ContainsText *SubstringMatchCriteria `json:"containsText,omitempty"`
	ReplaceText  *string                 `json:"replaceText,omitempty"`
}
