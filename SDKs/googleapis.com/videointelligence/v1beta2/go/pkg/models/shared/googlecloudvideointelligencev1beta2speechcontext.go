package shared

// GoogleCloudVideointelligenceV1beta2SpeechContext
// Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
type GoogleCloudVideointelligenceV1beta2SpeechContext struct {
	Phrases []string `json:"phrases,omitempty"`
}
