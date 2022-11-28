package shared

// ListJobsResponse
// Response message for ReportingService.ListJobs.
type ListJobsResponse struct {
	Jobs          []Job   `json:"jobs,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
