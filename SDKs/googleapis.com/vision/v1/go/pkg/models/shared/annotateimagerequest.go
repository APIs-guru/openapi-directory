package shared

type AnnotateImageRequest struct {
	Features     []Feature     `json:"features"`
	Image        *Image        `json:"image"`
	ImageContext *ImageContext `json:"imageContext"`
}
