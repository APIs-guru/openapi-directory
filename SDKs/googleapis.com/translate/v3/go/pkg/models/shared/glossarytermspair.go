package shared

type GlossaryTermsPair struct {
	SourceTerm *GlossaryTerm `json:"sourceTerm"`
	TargetTerm *GlossaryTerm `json:"targetTerm"`
}
