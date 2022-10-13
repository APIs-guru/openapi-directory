package shared

type SynthesizeSpeechResponse struct {
	AudioConfig  *AudioConfig `json:"audioConfig"`
	AudioContent *string      `json:"audioContent"`
	Timepoints   []Timepoint  `json:"timepoints"`
}
