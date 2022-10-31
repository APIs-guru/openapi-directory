package shared

type MoveAnalysis struct {
	Analysis    *MoveAnalysisResult `json:"analysis,omitempty"`
	DisplayName *string             `json:"displayName,omitempty"`
	Error       *Status             `json:"error,omitempty"`
}
