package shared

type GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest struct {
	Parent   *string                                         `json:"parent"`
	Requests []GoogleCloudVisionV1p2beta1AnnotateFileRequest `json:"requests"`
}
