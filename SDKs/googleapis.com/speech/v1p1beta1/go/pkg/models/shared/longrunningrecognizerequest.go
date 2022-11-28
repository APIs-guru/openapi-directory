package shared

// LongRunningRecognizeRequestInput
// The top-level message sent by the client for the `LongRunningRecognize` method.
type LongRunningRecognizeRequestInput struct {
	Audio        *RecognitionAudio       `json:"audio,omitempty"`
	Config       *RecognitionConfigInput `json:"config,omitempty"`
	OutputConfig *TranscriptOutputConfig `json:"outputConfig,omitempty"`
}
