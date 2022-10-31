package shared



type AnalyzeIamPolicyResponse struct {
    FullyExplored *bool `json:"fullyExplored,omitempty"`
    MainAnalysis *IamPolicyAnalysis `json:"mainAnalysis,omitempty"`
    NonCriticalErrors []GoogleCloudAssetV1p4beta1AnalysisState `json:"nonCriticalErrors,omitempty"`
    ServiceAccountImpersonationAnalysis []IamPolicyAnalysis `json:"serviceAccountImpersonationAnalysis,omitempty"`
    
}

