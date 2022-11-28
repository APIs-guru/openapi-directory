package shared

// TaskAttemptResult
// Result of a task attempt.
type TaskAttemptResult struct {
	ExitCode *int32           `json:"exitCode,omitempty"`
	Status   *GoogleRPCStatus `json:"status,omitempty"`
}
