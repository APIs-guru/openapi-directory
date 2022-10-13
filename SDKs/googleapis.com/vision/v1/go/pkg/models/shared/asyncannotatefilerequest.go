package shared

type AsyncAnnotateFileRequest struct {
	Features     []Feature     `json:"features"`
	ImageContext *ImageContext `json:"imageContext"`
	InputConfig  *InputConfig  `json:"inputConfig"`
	OutputConfig *OutputConfig `json:"outputConfig"`
}
