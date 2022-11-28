package shared

// ListPatchJobsResponse
// A response message for listing patch jobs.
type ListPatchJobsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	PatchJobs     []PatchJob `json:"patchJobs,omitempty"`
}
