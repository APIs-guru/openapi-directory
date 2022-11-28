package shared

// Sentence
// Represents a sentence in the input document.
type Sentence struct {
	Sentiment *Sentiment `json:"sentiment,omitempty"`
	Text      *TextSpan  `json:"text,omitempty"`
}
