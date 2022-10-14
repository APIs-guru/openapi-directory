package shared

type GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest struct {
	Parent   *string                                          `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p1beta1AnnotateImageRequest `json:"requests,omitempty"`
}
