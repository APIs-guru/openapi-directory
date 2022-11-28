package shared

// GoogleCloudVideointelligenceV1p2beta1SpeechContext
// Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
type GoogleCloudVideointelligenceV1p2beta1SpeechContext struct {
	Phrases []string `json:"phrases,omitempty"`
}
