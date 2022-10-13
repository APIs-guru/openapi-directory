package shared

type AnalyzeIamPolicyLongrunningRequest struct {
	AnalysisQuery      *IamPolicyAnalysisQuery        `json:"analysisQuery"`
	OutputConfig       *IamPolicyAnalysisOutputConfig `json:"outputConfig"`
	SavedAnalysisQuery *string                        `json:"savedAnalysisQuery"`
}
