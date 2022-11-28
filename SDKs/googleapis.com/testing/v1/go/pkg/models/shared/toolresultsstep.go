package shared

// ToolResultsStep
// Represents a tool results step resource. This has the results of a TestExecution.
type ToolResultsStep struct {
	ExecutionID *string `json:"executionId,omitempty"`
	HistoryID   *string `json:"historyId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
	StepID      *string `json:"stepId,omitempty"`
}
