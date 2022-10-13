package shared

type ToolResultsStep struct {
	ExecutionID *string `json:"executionId"`
	HistoryID   *string `json:"historyId"`
	ProjectID   *string `json:"projectId"`
	StepID      *string `json:"stepId"`
}
