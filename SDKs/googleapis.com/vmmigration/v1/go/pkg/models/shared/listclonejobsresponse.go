package shared

// ListCloneJobsResponse
// Response message for 'ListCloneJobs' request.
type ListCloneJobsResponse struct {
	CloneJobs     []CloneJob `json:"cloneJobs,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
