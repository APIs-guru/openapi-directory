package shared



type SynthesizeSpeechRequest struct {
    AudioConfig *AudioConfig `json:"audioConfig,omitempty"`
    Input *SynthesisInput `json:"input,omitempty"`
    Voice *VoiceSelectionParams `json:"voice,omitempty"`
    
}

