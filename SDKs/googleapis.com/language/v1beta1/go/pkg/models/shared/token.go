package shared



type Token struct {
    DependencyEdge *DependencyEdge `json:"dependencyEdge,omitempty"`
    Lemma *string `json:"lemma,omitempty"`
    PartOfSpeech *PartOfSpeech `json:"partOfSpeech,omitempty"`
    Text *TextSpan `json:"text,omitempty"`
    
}

