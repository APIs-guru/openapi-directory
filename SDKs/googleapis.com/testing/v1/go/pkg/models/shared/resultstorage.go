package shared

type ResultStorage struct {
	GoogleCloudStorage   *GoogleCloudStorage   `json:"googleCloudStorage"`
	ResultsURL           *string               `json:"resultsUrl"`
	ToolResultsExecution *ToolResultsExecution `json:"toolResultsExecution"`
	ToolResultsHistory   *ToolResultsHistory   `json:"toolResultsHistory"`
}
