package shared

type ListCloneJobsResponse struct {
	CloneJobs     []CloneJob `json:"cloneJobs"`
	NextPageToken *string    `json:"nextPageToken"`
	Unreachable   []string   `json:"unreachable"`
}
