package shared

type IamPolicyAnalysis struct {
	AnalysisQuery     *IamPolicyAnalysisQuery   `json:"analysisQuery"`
	AnalysisResults   []IamPolicyAnalysisResult `json:"analysisResults"`
	FullyExplored     *bool                     `json:"fullyExplored"`
	NonCriticalErrors []IamPolicyAnalysisState  `json:"nonCriticalErrors"`
}
