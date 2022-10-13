package shared

type MoveAnalysisResult struct {
	Blockers []MoveImpact `json:"blockers"`
	Warnings []MoveImpact `json:"warnings"`
}
