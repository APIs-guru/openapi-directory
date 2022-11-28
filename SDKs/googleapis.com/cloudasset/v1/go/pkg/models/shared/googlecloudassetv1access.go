package shared

// GoogleCloudAssetV1Access
// An IAM role or permission under analysis.
type GoogleCloudAssetV1Access struct {
	AnalysisState *IamPolicyAnalysisState `json:"analysisState,omitempty"`
	Permission    *string                 `json:"permission,omitempty"`
	Role          *string                 `json:"role,omitempty"`
}
