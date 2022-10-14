package shared

type SpeechContext struct {
	Boost   *float32 `json:"boost,omitempty"`
	Phrases []string `json:"phrases,omitempty"`
}
