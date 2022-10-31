package shared



type LongRunningRecognizeRequest struct {
    Audio *RecognitionAudio `json:"audio,omitempty"`
    Config *RecognitionConfig `json:"config,omitempty"`
    OutputConfig *TranscriptOutputConfig `json:"outputConfig,omitempty"`
    
}

