package shared

// AnalysisCompleted
// Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
type AnalysisCompleted struct {
	AnalysisType []string `json:"analysisType,omitempty"`
}
