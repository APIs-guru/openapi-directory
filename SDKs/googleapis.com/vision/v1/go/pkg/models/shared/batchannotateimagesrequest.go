package shared

type BatchAnnotateImagesRequest struct {
	Parent   *string                `json:"parent,omitempty"`
	Requests []AnnotateImageRequest `json:"requests,omitempty"`
}
