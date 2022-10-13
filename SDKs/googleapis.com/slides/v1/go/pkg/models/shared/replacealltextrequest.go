package shared

type ReplaceAllTextRequest struct {
	ContainsText  *SubstringMatchCriteria `json:"containsText"`
	PageObjectIds []string                `json:"pageObjectIds"`
	ReplaceText   *string                 `json:"replaceText"`
}
