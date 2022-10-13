package shared

type AnalyzeIamPolicyResponse struct {
	FullyExplored                       *bool                                    `json:"fullyExplored"`
	MainAnalysis                        *IamPolicyAnalysis                       `json:"mainAnalysis"`
	NonCriticalErrors                   []GoogleCloudAssetV1p4beta1AnalysisState `json:"nonCriticalErrors"`
	ServiceAccountImpersonationAnalysis []IamPolicyAnalysis                      `json:"serviceAccountImpersonationAnalysis"`
}
