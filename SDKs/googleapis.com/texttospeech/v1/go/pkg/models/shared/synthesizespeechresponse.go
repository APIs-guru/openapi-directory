package shared

// SynthesizeSpeechResponse
// The message returned to the client by the `SynthesizeSpeech` method.
type SynthesizeSpeechResponse struct {
	AudioContent *string `json:"audioContent,omitempty"`
}
