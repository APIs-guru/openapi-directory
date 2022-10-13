package shared

type SpeechContext struct {
	Boost   *float32 `json:"boost"`
	Phrases []string `json:"phrases"`
}
