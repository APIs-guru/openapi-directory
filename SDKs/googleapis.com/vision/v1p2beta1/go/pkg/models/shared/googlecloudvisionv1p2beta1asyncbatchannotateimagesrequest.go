package shared

// GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest
// Request for async image annotation for a list of images.
type GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *GoogleCloudVisionV1p2beta1OutputConfig          `json:"outputConfig,omitempty"`
	Parent       *string                                          `json:"parent,omitempty"`
	Requests     []GoogleCloudVisionV1p2beta1AnnotateImageRequest `json:"requests,omitempty"`
}
