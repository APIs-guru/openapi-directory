package shared

type Environment struct {
	CompletionTime    *Timestamp                       `json:"completionTime"`
	CreationTime      *Timestamp                       `json:"creationTime"`
	DimensionValue    []EnvironmentDimensionValueEntry `json:"dimensionValue"`
	DisplayName       *string                          `json:"displayName"`
	EnvironmentID     *string                          `json:"environmentId"`
	EnvironmentResult *MergedResult                    `json:"environmentResult"`
	ExecutionID       *string                          `json:"executionId"`
	HistoryID         *string                          `json:"historyId"`
	ProjectID         *string                          `json:"projectId"`
	ResultsStorage    *ResultsStorage                  `json:"resultsStorage"`
	ShardSummaries    []ShardSummary                   `json:"shardSummaries"`
}
