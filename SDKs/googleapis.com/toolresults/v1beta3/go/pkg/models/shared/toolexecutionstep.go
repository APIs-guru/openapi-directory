package shared

// ToolExecutionStep
// Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
type ToolExecutionStep struct {
	ToolExecution *ToolExecution `json:"toolExecution,omitempty"`
}
