package shared

// AnalyzeMoveResponse
// The response message for resource move analysis.
type AnalyzeMoveResponse struct {
	MoveAnalysis []MoveAnalysis `json:"moveAnalysis,omitempty"`
}
