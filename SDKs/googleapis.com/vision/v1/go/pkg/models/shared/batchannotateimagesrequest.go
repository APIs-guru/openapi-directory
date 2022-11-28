package shared

// BatchAnnotateImagesRequest
// Multiple image annotation requests are batched into a single service call.
type BatchAnnotateImagesRequest struct {
	Parent   *string                `json:"parent,omitempty"`
	Requests []AnnotateImageRequest `json:"requests,omitempty"`
}
