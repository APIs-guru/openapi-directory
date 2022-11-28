package shared

// GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest
// Multiple async file annotation requests are batched into a single service call.
type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                                              `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest `json:"requests,omitempty"`
}
