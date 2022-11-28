package shared

// GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest
// Multiple image annotation requests are batched into a single service call.
type GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest struct {
	Parent   *string                                          `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p1beta1AnnotateImageRequest `json:"requests,omitempty"`
}
