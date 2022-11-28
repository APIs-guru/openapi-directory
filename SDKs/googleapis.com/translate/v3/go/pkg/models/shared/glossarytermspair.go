package shared

// GlossaryTermsPair
// Represents a single entry for an unidirectional glossary.
type GlossaryTermsPair struct {
	SourceTerm *GlossaryTerm `json:"sourceTerm,omitempty"`
	TargetTerm *GlossaryTerm `json:"targetTerm,omitempty"`
}
