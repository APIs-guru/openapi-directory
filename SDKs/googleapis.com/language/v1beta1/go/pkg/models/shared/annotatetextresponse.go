package shared

type AnnotateTextResponse struct {
	DocumentSentiment *Sentiment `json:"documentSentiment"`
	Entities          []Entity   `json:"entities"`
	Language          *string    `json:"language"`
	Sentences         []Sentence `json:"sentences"`
	Tokens            []Token    `json:"tokens"`
}
