package shared

// RecognizeRequestInput
// The top-level message sent by the client for the `Recognize` method.
type RecognizeRequestInput struct {
	Audio  *RecognitionAudio       `json:"audio,omitempty"`
	Config *RecognitionConfigInput `json:"config,omitempty"`
}
