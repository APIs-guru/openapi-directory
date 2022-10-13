package shared

type ListPatchJobsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	PatchJobs     []PatchJob `json:"patchJobs"`
}
