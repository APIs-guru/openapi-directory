package shared

// ListPatchJobInstanceDetailsResponse
// A response message for listing the instances details for a patch job.
type ListPatchJobInstanceDetailsResponse struct {
	NextPageToken           *string                   `json:"nextPageToken,omitempty"`
	PatchJobInstanceDetails []PatchJobInstanceDetails `json:"patchJobInstanceDetails,omitempty"`
}
