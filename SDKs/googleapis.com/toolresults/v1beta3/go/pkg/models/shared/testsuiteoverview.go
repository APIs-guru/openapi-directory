package shared

type TestSuiteOverview struct {
	ElapsedTime  *Duration      `json:"elapsedTime"`
	ErrorCount   *int32         `json:"errorCount"`
	FailureCount *int32         `json:"failureCount"`
	FlakyCount   *int32         `json:"flakyCount"`
	Name         *string        `json:"name"`
	SkippedCount *int32         `json:"skippedCount"`
	TotalCount   *int32         `json:"totalCount"`
	XMLSource    *FileReference `json:"xmlSource"`
}
