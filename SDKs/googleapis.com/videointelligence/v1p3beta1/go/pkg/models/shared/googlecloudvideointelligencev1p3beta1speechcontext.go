package shared

// GoogleCloudVideointelligenceV1p3beta1SpeechContext
// Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
type GoogleCloudVideointelligenceV1p3beta1SpeechContext struct {
	Phrases []string `json:"phrases,omitempty"`
}
