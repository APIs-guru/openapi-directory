package shared

type GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest struct {
	Parent   *string                                          `json:"parent"`
	Requests []GoogleCloudVisionV1p2beta1AnnotateImageRequest `json:"requests"`
}
