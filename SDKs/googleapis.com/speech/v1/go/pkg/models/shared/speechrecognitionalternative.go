package shared

// SpeechRecognitionAlternative
// Alternative hypotheses (a.k.a. n-best list).
type SpeechRecognitionAlternative struct {
	Confidence *float32   `json:"confidence,omitempty"`
	Transcript *string    `json:"transcript,omitempty"`
	Words      []WordInfo `json:"words,omitempty"`
}
