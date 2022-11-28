package shared

// MoveAnalysis
// A message to group the analysis information.
type MoveAnalysis struct {
	Analysis    *MoveAnalysisResult `json:"analysis,omitempty"`
	DisplayName *string             `json:"displayName,omitempty"`
	Error       *Status             `json:"error,omitempty"`
}
