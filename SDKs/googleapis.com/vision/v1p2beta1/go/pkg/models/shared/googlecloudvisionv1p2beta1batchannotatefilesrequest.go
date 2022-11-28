package shared

// GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest
// A list of requests to annotate files using the BatchAnnotateFiles API.
type GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest struct {
	Parent   *string                                         `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p2beta1AnnotateFileRequest `json:"requests,omitempty"`
}
