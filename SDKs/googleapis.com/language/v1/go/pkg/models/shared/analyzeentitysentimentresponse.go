package shared

type AnalyzeEntitySentimentResponse struct {
	Entities []Entity `json:"entities,omitempty"`
	Language *string  `json:"language,omitempty"`
}
