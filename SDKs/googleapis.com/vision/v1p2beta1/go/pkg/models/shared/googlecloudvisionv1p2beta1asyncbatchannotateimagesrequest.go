package shared

type GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *GoogleCloudVisionV1p2beta1OutputConfig          `json:"outputConfig"`
	Parent       *string                                          `json:"parent"`
	Requests     []GoogleCloudVisionV1p2beta1AnnotateImageRequest `json:"requests"`
}
