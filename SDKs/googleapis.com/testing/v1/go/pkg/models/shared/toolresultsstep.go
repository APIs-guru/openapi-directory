package shared

type ToolResultsStep struct {
	ExecutionID *string `json:"executionId,omitempty"`
	HistoryID   *string `json:"historyId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
	StepID      *string `json:"stepId,omitempty"`
}
