package shared

type GoogleCloudAssetV1Access struct {
	AnalysisState *IamPolicyAnalysisState `json:"analysisState"`
	Permission    *string                 `json:"permission"`
	Role          *string                 `json:"role"`
}
