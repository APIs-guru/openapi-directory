package shared

// EntityMention
// An entity mention in the document.
type EntityMention struct {
	CertaintyAssessment *Feature       `json:"certaintyAssessment,omitempty"`
	Confidence          *float64       `json:"confidence,omitempty"`
	LinkedEntities      []LinkedEntity `json:"linkedEntities,omitempty"`
	MentionID           *string        `json:"mentionId,omitempty"`
	Subject             *Feature       `json:"subject,omitempty"`
	TemporalAssessment  *Feature       `json:"temporalAssessment,omitempty"`
	Text                *TextSpan      `json:"text,omitempty"`
	Type                *string        `json:"type,omitempty"`
}
