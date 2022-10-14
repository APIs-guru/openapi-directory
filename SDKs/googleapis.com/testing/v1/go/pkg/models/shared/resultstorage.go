package shared

type ResultStorage struct {
	GoogleCloudStorage   *GoogleCloudStorage   `json:"googleCloudStorage,omitempty"`
	ResultsURL           *string               `json:"resultsUrl,omitempty"`
	ToolResultsExecution *ToolResultsExecution `json:"toolResultsExecution,omitempty"`
	ToolResultsHistory   *ToolResultsHistory   `json:"toolResultsHistory,omitempty"`
}
