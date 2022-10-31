package shared

type AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *OutputConfig          `json:"outputConfig,omitempty"`
	Parent       *string                `json:"parent,omitempty"`
	Requests     []AnnotateImageRequest `json:"requests,omitempty"`
}
