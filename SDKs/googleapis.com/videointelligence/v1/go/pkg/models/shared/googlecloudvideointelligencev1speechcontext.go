package shared

// GoogleCloudVideointelligenceV1SpeechContext
// Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
type GoogleCloudVideointelligenceV1SpeechContext struct {
	Phrases []string `json:"phrases,omitempty"`
}
