package shared

type SynthesizeSpeechRequest struct {
	AudioConfig *AudioConfig          `json:"audioConfig"`
	Input       *SynthesisInput       `json:"input"`
	Voice       *VoiceSelectionParams `json:"voice"`
}
