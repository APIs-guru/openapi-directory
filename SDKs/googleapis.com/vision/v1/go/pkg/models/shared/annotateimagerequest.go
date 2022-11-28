package shared

// AnnotateImageRequest
// Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
type AnnotateImageRequest struct {
	Features     []Feature     `json:"features,omitempty"`
	Image        *Image        `json:"image,omitempty"`
	ImageContext *ImageContext `json:"imageContext,omitempty"`
}
