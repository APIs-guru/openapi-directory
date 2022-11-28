package shared

// AnalyzeEntitySentimentResponse
// The entity-level sentiment analysis response message.
type AnalyzeEntitySentimentResponse struct {
	Entities []Entity `json:"entities,omitempty"`
	Language *string  `json:"language,omitempty"`
}
