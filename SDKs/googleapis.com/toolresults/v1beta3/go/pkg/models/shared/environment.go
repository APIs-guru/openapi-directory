package shared

// Environment
// An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
type Environment struct {
	CompletionTime    *Timestamp                       `json:"completionTime,omitempty"`
	CreationTime      *Timestamp                       `json:"creationTime,omitempty"`
	DimensionValue    []EnvironmentDimensionValueEntry `json:"dimensionValue,omitempty"`
	DisplayName       *string                          `json:"displayName,omitempty"`
	EnvironmentID     *string                          `json:"environmentId,omitempty"`
	EnvironmentResult *MergedResult                    `json:"environmentResult,omitempty"`
	ExecutionID       *string                          `json:"executionId,omitempty"`
	HistoryID         *string                          `json:"historyId,omitempty"`
	ProjectID         *string                          `json:"projectId,omitempty"`
	ResultsStorage    *ResultsStorage                  `json:"resultsStorage,omitempty"`
	ShardSummaries    []ShardSummary                   `json:"shardSummaries,omitempty"`
}
