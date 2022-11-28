package shared

// AsyncAnnotateFileRequest
// An offline file annotation request.
type AsyncAnnotateFileRequest struct {
	Features     []Feature     `json:"features,omitempty"`
	ImageContext *ImageContext `json:"imageContext,omitempty"`
	InputConfig  *InputConfig  `json:"inputConfig,omitempty"`
	OutputConfig *OutputConfig `json:"outputConfig,omitempty"`
}
