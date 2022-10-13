package shared

type ToolExecution struct {
	CommandLineArguments []string              `json:"commandLineArguments"`
	ExitCode             *ToolExitCode         `json:"exitCode"`
	ToolLogs             []FileReference       `json:"toolLogs"`
	ToolOutputs          []ToolOutputReference `json:"toolOutputs"`
}
