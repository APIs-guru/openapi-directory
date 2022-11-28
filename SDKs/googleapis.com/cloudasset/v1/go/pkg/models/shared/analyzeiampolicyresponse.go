package shared

// AnalyzeIamPolicyResponse
// A response message for AssetService.AnalyzeIamPolicy.
type AnalyzeIamPolicyResponse struct {
	FullyExplored                       *bool               `json:"fullyExplored,omitempty"`
	MainAnalysis                        *IamPolicyAnalysis  `json:"mainAnalysis,omitempty"`
	ServiceAccountImpersonationAnalysis []IamPolicyAnalysis `json:"serviceAccountImpersonationAnalysis,omitempty"`
}
