package shared

// GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest
// Request for async image annotation for a list of images.
type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *GoogleCloudVisionV1p1beta1OutputConfig          `json:"outputConfig,omitempty"`
	Parent       *string                                          `json:"parent,omitempty"`
	Requests     []GoogleCloudVisionV1p1beta1AnnotateImageRequest `json:"requests,omitempty"`
}
