package shared

// MoveAnalysisResult
// An analysis result including blockers and warnings.
type MoveAnalysisResult struct {
	Blockers []MoveImpact `json:"blockers,omitempty"`
	Warnings []MoveImpact `json:"warnings,omitempty"`
}
