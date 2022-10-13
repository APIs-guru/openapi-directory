package shared

type ShellTask struct {
	Command  *string `json:"command"`
	ExitCode *int32  `json:"exitCode"`
}
