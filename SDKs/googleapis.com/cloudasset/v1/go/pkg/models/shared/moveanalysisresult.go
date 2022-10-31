package shared

type MoveAnalysisResult struct {
	Blockers []MoveImpact `json:"blockers,omitempty"`
	Warnings []MoveImpact `json:"warnings,omitempty"`
}
