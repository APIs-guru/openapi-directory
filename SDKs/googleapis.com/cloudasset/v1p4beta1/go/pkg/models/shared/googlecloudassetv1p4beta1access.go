package shared

type GoogleCloudAssetV1p4beta1Access struct {
	AnalysisState *GoogleCloudAssetV1p4beta1AnalysisState `json:"analysisState"`
	Permission    *string                                 `json:"permission"`
	Role          *string                                 `json:"role"`
}
