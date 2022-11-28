package shared

// ExecutionReference
// Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
type ExecutionReference struct {
	CompletionTimestamp *string `json:"completionTimestamp,omitempty"`
	CreationTimestamp   *string `json:"creationTimestamp,omitempty"`
	Name                *string `json:"name,omitempty"`
}
