package shared

type TaskAttemptResult struct {
	ExitCode *int32           `json:"exitCode,omitempty"`
	Status   *GoogleRPCStatus `json:"status,omitempty"`
}
