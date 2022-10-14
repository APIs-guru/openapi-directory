package shared

type ShellTask struct {
	Command  *string `json:"command,omitempty"`
	ExitCode *int32  `json:"exitCode,omitempty"`
}
