package shared



type ToolExecution struct {
    CommandLineArguments []string `json:"commandLineArguments,omitempty"`
    ExitCode *ToolExitCode `json:"exitCode,omitempty"`
    ToolLogs []FileReference `json:"toolLogs,omitempty"`
    ToolOutputs []ToolOutputReference `json:"toolOutputs,omitempty"`
    
}

