package shared

type JobExecutionDetails struct {
	NextPageToken *string        `json:"nextPageToken"`
	Stages        []StageSummary `json:"stages"`
}
