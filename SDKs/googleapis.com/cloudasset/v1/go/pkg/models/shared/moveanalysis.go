package shared

type MoveAnalysis struct {
	Analysis    *MoveAnalysisResult `json:"analysis"`
	DisplayName *string             `json:"displayName"`
	Error       *Status             `json:"error"`
}
