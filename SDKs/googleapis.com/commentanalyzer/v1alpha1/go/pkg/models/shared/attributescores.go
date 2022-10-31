package shared

type AttributeScores struct {
	SpanScores   []SpanScore `json:"spanScores,omitempty"`
	SummaryScore *Score      `json:"summaryScore,omitempty"`
}
