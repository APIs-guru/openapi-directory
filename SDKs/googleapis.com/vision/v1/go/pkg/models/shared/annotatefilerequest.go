package shared

type AnnotateFileRequest struct {
	Features     []Feature     `json:"features"`
	ImageContext *ImageContext `json:"imageContext"`
	InputConfig  *InputConfig  `json:"inputConfig"`
	Pages        []int32       `json:"pages"`
}
