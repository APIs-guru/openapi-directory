package shared

type SpeechRecognitionAlternative struct {
	Confidence *float32   `json:"confidence,omitempty"`
	Transcript *string    `json:"transcript,omitempty"`
	Words      []WordInfo `json:"words,omitempty"`
}
