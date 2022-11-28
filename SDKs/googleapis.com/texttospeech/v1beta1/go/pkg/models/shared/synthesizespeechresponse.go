package shared

// SynthesizeSpeechResponse
// The message returned to the client by the `SynthesizeSpeech` method.
type SynthesizeSpeechResponse struct {
	AudioConfig  *AudioConfig `json:"audioConfig,omitempty"`
	AudioContent *string      `json:"audioContent,omitempty"`
	Timepoints   []Timepoint  `json:"timepoints,omitempty"`
}
