package shared

// AnnotateFileRequest
// A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
type AnnotateFileRequest struct {
	Features     []Feature     `json:"features,omitempty"`
	ImageContext *ImageContext `json:"imageContext,omitempty"`
	InputConfig  *InputConfig  `json:"inputConfig,omitempty"`
	Pages        []int32       `json:"pages,omitempty"`
}
