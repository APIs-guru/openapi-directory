package shared



type AnalyzeSentimentResponse struct {
    DocumentSentiment *Sentiment `json:"documentSentiment,omitempty"`
    Language *string `json:"language,omitempty"`
    Sentences []Sentence `json:"sentences,omitempty"`
    
}

