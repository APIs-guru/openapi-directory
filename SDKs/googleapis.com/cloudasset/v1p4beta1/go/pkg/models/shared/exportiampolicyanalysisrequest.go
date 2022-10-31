package shared

type ExportIamPolicyAnalysisRequest struct {
	AnalysisQuery *IamPolicyAnalysisQuery        `json:"analysisQuery,omitempty"`
	Options       *Options                       `json:"options,omitempty"`
	OutputConfig  *IamPolicyAnalysisOutputConfig `json:"outputConfig,omitempty"`
}
