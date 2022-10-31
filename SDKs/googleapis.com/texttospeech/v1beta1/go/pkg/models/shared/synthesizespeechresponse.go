package shared



type SynthesizeSpeechResponse struct {
    AudioConfig *AudioConfig `json:"audioConfig,omitempty"`
    AudioContent *string `json:"audioContent,omitempty"`
    Timepoints []Timepoint `json:"timepoints,omitempty"`
    
}

