package shared

type GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                                              `json:"parent"`
	Requests []GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest `json:"requests"`
}
