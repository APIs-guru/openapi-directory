package shared

type SpeechAdaptation struct {
	CustomClasses       []CustomClass `json:"customClasses,omitempty"`
	PhraseSetReferences []string      `json:"phraseSetReferences,omitempty"`
	PhraseSets          []PhraseSet   `json:"phraseSets,omitempty"`
}
