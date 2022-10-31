package shared

type ListCloneJobsResponse struct {
	CloneJobs     []CloneJob `json:"cloneJobs,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
