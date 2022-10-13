package shared

type AnalyzeIamPolicyResponse struct {
	FullyExplored                       *bool               `json:"fullyExplored"`
	MainAnalysis                        *IamPolicyAnalysis  `json:"mainAnalysis"`
	ServiceAccountImpersonationAnalysis []IamPolicyAnalysis `json:"serviceAccountImpersonationAnalysis"`
}
