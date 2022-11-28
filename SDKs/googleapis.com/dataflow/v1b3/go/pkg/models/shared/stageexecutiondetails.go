package shared

// StageExecutionDetails
// Information about the workers and work items within a stage.
type StageExecutionDetails struct {
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Workers       []WorkerDetails `json:"workers,omitempty"`
}
