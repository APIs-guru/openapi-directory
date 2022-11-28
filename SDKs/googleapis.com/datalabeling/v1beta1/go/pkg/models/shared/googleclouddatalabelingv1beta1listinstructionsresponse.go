package shared

// GoogleCloudDatalabelingV1beta1ListInstructionsResponse
// Results of listing instructions under a project.
type GoogleCloudDatalabelingV1beta1ListInstructionsResponse struct {
	Instructions  []GoogleCloudDatalabelingV1beta1Instruction `json:"instructions,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
