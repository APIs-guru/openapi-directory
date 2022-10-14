package shared

type JobExecutionDetails struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Stages        []StageSummary `json:"stages,omitempty"`
}
