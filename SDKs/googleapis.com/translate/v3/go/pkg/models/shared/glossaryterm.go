package shared

// GlossaryTerm
// Represents a single glossary term
type GlossaryTerm struct {
	LanguageCode *string `json:"languageCode,omitempty"`
	Text         *string `json:"text,omitempty"`
}
