package shared

// GoogleCloudRunV2ExecutionReference
// Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
type GoogleCloudRunV2ExecutionReference struct {
	CompletionTime *string `json:"completionTime,omitempty"`
	CreateTime     *string `json:"createTime,omitempty"`
	Name           *string `json:"name,omitempty"`
}
