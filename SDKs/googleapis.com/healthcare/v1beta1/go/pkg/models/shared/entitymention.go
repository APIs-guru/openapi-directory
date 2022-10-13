package shared

type EntityMention struct {
	CertaintyAssessment *Feature       `json:"certaintyAssessment"`
	Confidence          *float64       `json:"confidence"`
	LinkedEntities      []LinkedEntity `json:"linkedEntities"`
	MentionID           *string        `json:"mentionId"`
	Subject             *Feature       `json:"subject"`
	TemporalAssessment  *Feature       `json:"temporalAssessment"`
	Text                *TextSpan      `json:"text"`
	Type                *string        `json:"type"`
}
