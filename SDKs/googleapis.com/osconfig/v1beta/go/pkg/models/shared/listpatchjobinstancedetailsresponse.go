package shared

type ListPatchJobInstanceDetailsResponse struct {
	NextPageToken           *string                   `json:"nextPageToken"`
	PatchJobInstanceDetails []PatchJobInstanceDetails `json:"patchJobInstanceDetails"`
}
