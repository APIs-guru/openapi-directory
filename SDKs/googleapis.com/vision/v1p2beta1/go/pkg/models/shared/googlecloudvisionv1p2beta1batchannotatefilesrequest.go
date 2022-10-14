package shared

type GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest struct {
	Parent   *string                                         `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p2beta1AnnotateFileRequest `json:"requests,omitempty"`
}
