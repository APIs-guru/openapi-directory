package shared

// JobExecutionDetails
// Information about the execution of a job.
type JobExecutionDetails struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Stages        []StageSummary `json:"stages,omitempty"`
}
