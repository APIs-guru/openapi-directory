package shared

// IamPolicyAnalysis
// An analysis message to group the query and results.
type IamPolicyAnalysis struct {
	AnalysisQuery     *IamPolicyAnalysisQuery   `json:"analysisQuery,omitempty"`
	AnalysisResults   []IamPolicyAnalysisResult `json:"analysisResults,omitempty"`
	FullyExplored     *bool                     `json:"fullyExplored,omitempty"`
	NonCriticalErrors []IamPolicyAnalysisState  `json:"nonCriticalErrors,omitempty"`
}
