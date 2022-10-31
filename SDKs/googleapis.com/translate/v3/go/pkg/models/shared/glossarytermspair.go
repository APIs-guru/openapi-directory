package shared

type GlossaryTermsPair struct {
	SourceTerm *GlossaryTerm `json:"sourceTerm,omitempty"`
	TargetTerm *GlossaryTerm `json:"targetTerm,omitempty"`
}
