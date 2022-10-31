package shared



type Sentence struct {
    Sentiment *Sentiment `json:"sentiment,omitempty"`
    Text *TextSpan `json:"text,omitempty"`
    
}

