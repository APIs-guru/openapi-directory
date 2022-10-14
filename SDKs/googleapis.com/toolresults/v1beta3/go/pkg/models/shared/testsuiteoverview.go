package shared

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
