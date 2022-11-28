package shared

// GoogleCloudDialogflowV2SpeechContext
// Hints for the speech recognizer to help with recognition in a specific conversation state.
type GoogleCloudDialogflowV2SpeechContext struct {
	Boost   *float32 `json:"boost,omitempty"`
	Phrases []string `json:"phrases,omitempty"`
}
