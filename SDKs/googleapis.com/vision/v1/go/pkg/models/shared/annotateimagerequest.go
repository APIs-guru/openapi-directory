package shared

type AnnotateImageRequest struct {
	Features     []Feature     `json:"features,omitempty"`
	Image        *Image        `json:"image,omitempty"`
	ImageContext *ImageContext `json:"imageContext,omitempty"`
}
