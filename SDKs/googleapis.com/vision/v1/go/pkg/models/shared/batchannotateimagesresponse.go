package shared

// BatchAnnotateImagesResponse
// Response to a batch image annotation request.
type BatchAnnotateImagesResponse struct {
	Responses []AnnotateImageResponse `json:"responses,omitempty"`
}
