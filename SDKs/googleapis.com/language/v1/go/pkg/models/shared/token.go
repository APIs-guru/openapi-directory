package shared

type Token struct {
	DependencyEdge *DependencyEdge `json:"dependencyEdge"`
	Lemma          *string         `json:"lemma"`
	PartOfSpeech   *PartOfSpeech   `json:"partOfSpeech"`
	Text           *TextSpan       `json:"text"`
}
