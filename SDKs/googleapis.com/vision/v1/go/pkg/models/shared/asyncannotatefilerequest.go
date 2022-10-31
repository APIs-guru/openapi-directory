package shared



type AsyncAnnotateFileRequest struct {
    Features []Feature `json:"features,omitempty"`
    ImageContext *ImageContext `json:"imageContext,omitempty"`
    InputConfig *InputConfig `json:"inputConfig,omitempty"`
    OutputConfig *OutputConfig `json:"outputConfig,omitempty"`
    
}

