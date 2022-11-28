package shared

// ToolResultsExecution
// Represents a tool results execution resource. This has the results of a TestMatrix.
type ToolResultsExecution struct {
	ExecutionID *string `json:"executionId,omitempty"`
	HistoryID   *string `json:"historyId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
}
