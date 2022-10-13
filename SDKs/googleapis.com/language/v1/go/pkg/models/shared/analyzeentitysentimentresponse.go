package shared

type AnalyzeEntitySentimentResponse struct {
	Entities []Entity `json:"entities"`
	Language *string  `json:"language"`
}
