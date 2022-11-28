package shared

// AnalyzeIamPolicyLongrunningRequest
// A request message for AssetService.AnalyzeIamPolicyLongrunning.
type AnalyzeIamPolicyLongrunningRequest struct {
	AnalysisQuery      *IamPolicyAnalysisQuery        `json:"analysisQuery,omitempty"`
	OutputConfig       *IamPolicyAnalysisOutputConfig `json:"outputConfig,omitempty"`
	SavedAnalysisQuery *string                        `json:"savedAnalysisQuery,omitempty"`
}
