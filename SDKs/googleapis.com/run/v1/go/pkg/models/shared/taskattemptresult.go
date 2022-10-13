package shared

type TaskAttemptResult struct {
	ExitCode *int32           `json:"exitCode"`
	Status   *GoogleRPCStatus `json:"status"`
}
