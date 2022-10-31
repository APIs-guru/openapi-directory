package shared

type ListPatchJobInstanceDetailsResponse struct {
	NextPageToken           *string                   `json:"nextPageToken,omitempty"`
	PatchJobInstanceDetails []PatchJobInstanceDetails `json:"patchJobInstanceDetails,omitempty"`
}
