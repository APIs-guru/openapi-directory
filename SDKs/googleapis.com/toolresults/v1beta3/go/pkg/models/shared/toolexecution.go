package shared

// ToolExecution
// An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
type ToolExecution struct {
	CommandLineArguments []string              `json:"commandLineArguments,omitempty"`
	ExitCode             *ToolExitCode         `json:"exitCode,omitempty"`
	ToolLogs             []FileReference       `json:"toolLogs,omitempty"`
	ToolOutputs          []ToolOutputReference `json:"toolOutputs,omitempty"`
}
