package shared



type AnalyzeIamPolicyLongrunningRequest struct {
    AnalysisQuery *IamPolicyAnalysisQuery `json:"analysisQuery,omitempty"`
    OutputConfig *IamPolicyAnalysisOutputConfig `json:"outputConfig,omitempty"`
    SavedAnalysisQuery *string `json:"savedAnalysisQuery,omitempty"`
    
}

