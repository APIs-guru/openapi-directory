package shared

// ListJobsResponse
// Response message for `TranscoderService.ListJobs`.
type ListJobsResponse struct {
	Jobs          []Job   `json:"jobs,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
