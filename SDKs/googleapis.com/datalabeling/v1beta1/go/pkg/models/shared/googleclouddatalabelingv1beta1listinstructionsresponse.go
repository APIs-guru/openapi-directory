package shared

type GoogleCloudDatalabelingV1beta1ListInstructionsResponse struct {
	Instructions  []GoogleCloudDatalabelingV1beta1Instruction `json:"instructions,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
