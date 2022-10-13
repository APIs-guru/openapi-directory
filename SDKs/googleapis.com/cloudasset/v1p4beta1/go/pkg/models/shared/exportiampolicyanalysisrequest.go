package shared

type ExportIamPolicyAnalysisRequest struct {
	AnalysisQuery *IamPolicyAnalysisQuery        `json:"analysisQuery"`
	Options       *Options                       `json:"options"`
	OutputConfig  *IamPolicyAnalysisOutputConfig `json:"outputConfig"`
}
