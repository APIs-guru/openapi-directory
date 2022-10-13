package shared

type AnalyzeSentimentResponse struct {
	DocumentSentiment *Sentiment `json:"documentSentiment"`
	Language          *string    `json:"language"`
	Sentences         []Sentence `json:"sentences"`
}
