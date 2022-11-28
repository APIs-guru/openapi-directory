package shared

// ListJobRunsResponse
// ListJobRunsResponse is the response object returned by `ListJobRuns`.
type ListJobRunsResponse struct {
	JobRuns       []JobRun `json:"jobRuns,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
