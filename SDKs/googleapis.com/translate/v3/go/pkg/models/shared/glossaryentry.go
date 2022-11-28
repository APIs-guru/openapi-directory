package shared

// GlossaryEntry
// Represents a single entry in a glossary.
type GlossaryEntry struct {
	Description *string            `json:"description,omitempty"`
	Name        *string            `json:"name,omitempty"`
	TermsPair   *GlossaryTermsPair `json:"termsPair,omitempty"`
	TermsSet    *GlossaryTermsSet  `json:"termsSet,omitempty"`
}
