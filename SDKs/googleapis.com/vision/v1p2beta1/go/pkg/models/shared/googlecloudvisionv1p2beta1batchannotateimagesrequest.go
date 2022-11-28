package shared

// GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest
// Multiple image annotation requests are batched into a single service call.
type GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest struct {
	Parent   *string                                          `json:"parent,omitempty"`
	Requests []GoogleCloudVisionV1p2beta1AnnotateImageRequest `json:"requests,omitempty"`
}
