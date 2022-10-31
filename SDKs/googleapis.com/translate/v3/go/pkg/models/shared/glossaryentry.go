package shared

type GlossaryEntry struct {
	Description *string            `json:"description,omitempty"`
	Name        *string            `json:"name,omitempty"`
	TermsPair   *GlossaryTermsPair `json:"termsPair,omitempty"`
	TermsSet    *GlossaryTermsSet  `json:"termsSet,omitempty"`
}
