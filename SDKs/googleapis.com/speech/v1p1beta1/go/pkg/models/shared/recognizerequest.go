package shared



type RecognizeRequest struct {
    Audio *RecognitionAudio `json:"audio,omitempty"`
    Config *RecognitionConfig `json:"config,omitempty"`
    
}

