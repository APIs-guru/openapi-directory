package shared

type InstanceAttemptResult struct {
	ExitCode *int32           `json:"exitCode"`
	Status   *GoogleRPCStatus `json:"status"`
}
