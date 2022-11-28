package shared

// AttributeScores
// This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
type AttributeScores struct {
	SpanScores   []SpanScore `json:"spanScores,omitempty"`
	SummaryScore *Score      `json:"summaryScore,omitempty"`
}
