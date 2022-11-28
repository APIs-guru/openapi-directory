package shared

// ListJobsResponse
// Response message for listing jobs using ListJobs.
type ListJobsResponse struct {
	Jobs          []Job   `json:"jobs,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
