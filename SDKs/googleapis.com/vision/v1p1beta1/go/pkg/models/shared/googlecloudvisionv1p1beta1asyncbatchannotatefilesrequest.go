package shared

type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                                              `json:"parent"`
	Requests []GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest `json:"requests"`
}
