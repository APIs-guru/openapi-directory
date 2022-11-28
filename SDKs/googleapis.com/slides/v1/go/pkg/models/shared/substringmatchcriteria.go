package shared

// SubstringMatchCriteria
// A criteria that matches a specific string of text in a shape or table.
type SubstringMatchCriteria struct {
	MatchCase *bool   `json:"matchCase,omitempty"`
	Text      *string `json:"text,omitempty"`
}
