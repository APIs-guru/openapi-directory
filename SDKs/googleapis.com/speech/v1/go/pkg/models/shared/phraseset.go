package shared

type PhraseSet struct {
	Boost   *float32 `json:"boost"`
	Name    *string  `json:"name"`
	Phrases []Phrase `json:"phrases"`
}
