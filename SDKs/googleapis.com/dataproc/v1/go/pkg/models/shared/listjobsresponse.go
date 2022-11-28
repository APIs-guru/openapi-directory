package shared

// ListJobsResponse
// A list of jobs in a project.
type ListJobsResponse struct {
	Jobs          []Job   `json:"jobs,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
