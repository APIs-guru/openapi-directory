package shared

type ReplaceAllTextRequest struct {
	ContainsText *SubstringMatchCriteria `json:"containsText,omitempty"`
	ReplaceText  *string                 `json:"replaceText,omitempty"`
}
