package shared

// ShellTask
// A task which consists of a shell command for the worker to execute.
type ShellTask struct {
	Command  *string `json:"command,omitempty"`
	ExitCode *int32  `json:"exitCode,omitempty"`
}
