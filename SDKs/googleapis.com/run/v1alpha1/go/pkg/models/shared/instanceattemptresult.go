package shared

// InstanceAttemptResult
// Result of an instance attempt.
type InstanceAttemptResult struct {
	ExitCode *int32           `json:"exitCode,omitempty"`
	Status   *GoogleRPCStatus `json:"status,omitempty"`
}
