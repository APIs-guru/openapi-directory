package shared

type BatchAnnotateImagesResponse struct {
	Responses []AnnotateImageResponse `json:"responses,omitempty"`
}
