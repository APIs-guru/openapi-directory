package shared

// AnalyzeSentimentResponse
// The sentiment analysis response message.
type AnalyzeSentimentResponse struct {
	DocumentSentiment *Sentiment `json:"documentSentiment,omitempty"`
	Language          *string    `json:"language,omitempty"`
	Sentences         []Sentence `json:"sentences,omitempty"`
}
