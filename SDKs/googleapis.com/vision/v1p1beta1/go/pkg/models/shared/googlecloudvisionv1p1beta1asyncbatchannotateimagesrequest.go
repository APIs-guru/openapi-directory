package shared

type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *GoogleCloudVisionV1p1beta1OutputConfig          `json:"outputConfig"`
	Parent       *string                                          `json:"parent"`
	Requests     []GoogleCloudVisionV1p1beta1AnnotateImageRequest `json:"requests"`
}
