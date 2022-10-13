package shared

type ReplaceAllTextRequest struct {
	ContainsText *SubstringMatchCriteria `json:"containsText"`
	ReplaceText  *string                 `json:"replaceText"`
}
