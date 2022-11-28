package shared

// GoogleCloudRunV2TaskAttemptResult
// Result of a task attempt.
type GoogleCloudRunV2TaskAttemptResult struct {
	ExitCode *int32           `json:"exitCode,omitempty"`
	Status   *GoogleRPCStatus `json:"status,omitempty"`
}
