package shared

// SubstringMatchCriteria
// A criteria that matches a specific string of text in the document.
type SubstringMatchCriteria struct {
	MatchCase *bool   `json:"matchCase,omitempty"`
	Text      *string `json:"text,omitempty"`
}
