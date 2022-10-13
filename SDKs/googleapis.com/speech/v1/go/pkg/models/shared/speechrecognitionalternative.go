package shared

type SpeechRecognitionAlternative struct {
	Confidence *float32   `json:"confidence"`
	Transcript *string    `json:"transcript"`
	Words      []WordInfo `json:"words"`
}
