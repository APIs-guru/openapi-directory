package shared

type GoogleCloudRunV2TaskAttemptResult struct {
	ExitCode *int32           `json:"exitCode"`
	Status   *GoogleRPCStatus `json:"status"`
}
