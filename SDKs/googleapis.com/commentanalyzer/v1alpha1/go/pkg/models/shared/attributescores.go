package shared

type AttributeScores struct {
	SpanScores   []SpanScore `json:"spanScores"`
	SummaryScore *Score      `json:"summaryScore"`
}
