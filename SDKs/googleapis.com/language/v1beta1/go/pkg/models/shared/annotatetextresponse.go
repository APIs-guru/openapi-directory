package shared

// AnnotateTextResponse
// The text annotations response message.
type AnnotateTextResponse struct {
	DocumentSentiment *Sentiment `json:"documentSentiment,omitempty"`
	Entities          []Entity   `json:"entities,omitempty"`
	Language          *string    `json:"language,omitempty"`
	Sentences         []Sentence `json:"sentences,omitempty"`
	Tokens            []Token    `json:"tokens,omitempty"`
}
