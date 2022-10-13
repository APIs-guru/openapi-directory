package shared

type BatchAnnotateImagesRequest struct {
	Parent   *string                `json:"parent"`
	Requests []AnnotateImageRequest `json:"requests"`
}
