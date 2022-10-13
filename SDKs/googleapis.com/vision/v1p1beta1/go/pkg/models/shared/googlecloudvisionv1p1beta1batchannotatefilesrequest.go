package shared

type GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest struct {
	Parent   *string                                         `json:"parent"`
	Requests []GoogleCloudVisionV1p1beta1AnnotateFileRequest `json:"requests"`
}
