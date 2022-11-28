package shared

// GoogleCloudAssetV1Resource
// A Google Cloud resource under analysis.
type GoogleCloudAssetV1Resource struct {
	AnalysisState    *IamPolicyAnalysisState `json:"analysisState,omitempty"`
	FullResourceName *string                 `json:"fullResourceName,omitempty"`
}
