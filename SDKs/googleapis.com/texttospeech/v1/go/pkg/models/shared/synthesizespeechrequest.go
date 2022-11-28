package shared

// SynthesizeSpeechRequest
// The top-level message sent by the client for the `SynthesizeSpeech` method.
type SynthesizeSpeechRequest struct {
	AudioConfig *AudioConfig          `json:"audioConfig,omitempty"`
	Input       *SynthesisInput       `json:"input,omitempty"`
	Voice       *VoiceSelectionParams `json:"voice,omitempty"`
}
