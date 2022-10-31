package shared

type PhraseSet struct {
	Boost   *float32 `json:"boost,omitempty"`
	Name    *string  `json:"name,omitempty"`
	Phrases []Phrase `json:"phrases,omitempty"`
}
