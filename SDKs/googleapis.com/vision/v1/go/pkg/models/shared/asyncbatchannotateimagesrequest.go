package shared

// AsyncBatchAnnotateImagesRequest
// Request for async image annotation for a list of images.
type AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *OutputConfig          `json:"outputConfig,omitempty"`
	Parent       *string                `json:"parent,omitempty"`
	Requests     []AnnotateImageRequest `json:"requests,omitempty"`
}
