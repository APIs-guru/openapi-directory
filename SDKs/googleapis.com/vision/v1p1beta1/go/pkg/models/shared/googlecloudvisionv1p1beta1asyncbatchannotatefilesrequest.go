package shared

type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                                              `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest `json:"requests,omitempty"`
}
