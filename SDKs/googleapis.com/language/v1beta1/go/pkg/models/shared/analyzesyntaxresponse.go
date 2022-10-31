package shared



type AnalyzeSyntaxResponse struct {
    Language *string `json:"language,omitempty"`
    Sentences []Sentence `json:"sentences,omitempty"`
    Tokens []Token `json:"tokens,omitempty"`
    
}

