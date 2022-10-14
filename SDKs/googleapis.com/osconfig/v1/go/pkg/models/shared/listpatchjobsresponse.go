package shared

type ListPatchJobsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	PatchJobs     []PatchJob `json:"patchJobs,omitempty"`
}
