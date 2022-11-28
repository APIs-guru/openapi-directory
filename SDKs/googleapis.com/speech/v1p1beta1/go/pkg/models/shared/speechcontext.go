package shared

// SpeechContext
// Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
type SpeechContext struct {
	Boost   *float32 `json:"boost,omitempty"`
	Phrases []string `json:"phrases,omitempty"`
}
