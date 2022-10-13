package shared

type AsyncBatchAnnotateImagesRequest struct {
	OutputConfig *OutputConfig          `json:"outputConfig"`
	Parent       *string                `json:"parent"`
	Requests     []AnnotateImageRequest `json:"requests"`
}
