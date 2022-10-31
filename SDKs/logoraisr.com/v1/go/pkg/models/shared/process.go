package shared



type Process struct {
    Crop *string `json:"crop,omitempty"`
    Flip *bool `json:"flip,omitempty"`
    Mirror *bool `json:"mirror,omitempty"`
    ProcessingAlgorithm string `json:"processing_algorithm"`
    Resize *string `json:"resize,omitempty"`
    Rotate *int64 `json:"rotate,omitempty"`
    
}

