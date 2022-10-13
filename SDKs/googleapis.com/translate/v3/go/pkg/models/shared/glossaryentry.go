package shared

type GlossaryEntry struct {
	Description *string            `json:"description"`
	Name        *string            `json:"name"`
	TermsPair   *GlossaryTermsPair `json:"termsPair"`
	TermsSet    *GlossaryTermsSet  `json:"termsSet"`
}
