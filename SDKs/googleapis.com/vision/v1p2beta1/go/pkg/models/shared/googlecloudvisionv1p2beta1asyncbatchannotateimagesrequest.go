package shared

type GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *GoogleCloudVisionV1p2beta1OutputConfig          `json:"outputConfig,omitempty"`
	Parent       *string                                          `json:"parent,omitempty"`
	Requests     []GoogleCloudVisionV1p2beta1AnnotateImageRequest `json:"requests,omitempty"`
}
