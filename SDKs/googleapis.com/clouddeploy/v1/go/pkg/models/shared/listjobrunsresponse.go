package shared

type ListJobRunsResponse struct {
	JobRuns       []JobRun `json:"jobRuns"`
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
}
