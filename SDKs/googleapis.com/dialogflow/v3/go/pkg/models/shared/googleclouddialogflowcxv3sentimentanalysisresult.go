package shared

// GoogleCloudDialogflowCxV3SentimentAnalysisResult
// The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
type GoogleCloudDialogflowCxV3SentimentAnalysisResult struct {
	Magnitude *float32 `json:"magnitude,omitempty"`
	Score     *float32 `json:"score,omitempty"`
}
