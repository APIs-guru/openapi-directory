package shared

type ReplaceAllTextRequest struct {
	ContainsText  *SubstringMatchCriteria `json:"containsText,omitempty"`
	PageObjectIds []string                `json:"pageObjectIds,omitempty"`
	ReplaceText   *string                 `json:"replaceText,omitempty"`
}
