package shared

type SpeechAdaptation struct {
	CustomClasses       []CustomClass `json:"customClasses"`
	PhraseSetReferences []string      `json:"phraseSetReferences"`
	PhraseSets          []PhraseSet   `json:"phraseSets"`
}
