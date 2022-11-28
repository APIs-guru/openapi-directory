package shared

// TestSuiteOverview
// A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
type TestSuiteOverview struct {
	ElapsedTime  *Duration      `json:"elapsedTime,omitempty"`
	ErrorCount   *int32         `json:"errorCount,omitempty"`
	FailureCount *int32         `json:"failureCount,omitempty"`
	FlakyCount   *int32         `json:"flakyCount,omitempty"`
	Name         *string        `json:"name,omitempty"`
	SkippedCount *int32         `json:"skippedCount,omitempty"`
	TotalCount   *int32         `json:"totalCount,omitempty"`
	XMLSource    *FileReference `json:"xmlSource,omitempty"`
}
