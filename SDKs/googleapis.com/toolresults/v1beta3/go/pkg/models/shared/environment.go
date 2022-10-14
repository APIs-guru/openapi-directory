package shared

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
