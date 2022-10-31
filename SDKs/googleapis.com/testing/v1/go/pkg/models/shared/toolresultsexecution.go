package shared

type ToolResultsExecution struct {
	ExecutionID *string `json:"executionId,omitempty"`
	HistoryID   *string `json:"historyId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
}
