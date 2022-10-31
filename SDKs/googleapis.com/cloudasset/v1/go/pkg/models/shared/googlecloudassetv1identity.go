package shared

type GoogleCloudAssetV1Identity struct {
	AnalysisState *IamPolicyAnalysisState `json:"analysisState,omitempty"`
	Name          *string                 `json:"name,omitempty"`
}
