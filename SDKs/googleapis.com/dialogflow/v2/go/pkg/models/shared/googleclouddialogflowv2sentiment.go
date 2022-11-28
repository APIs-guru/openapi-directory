package shared

// GoogleCloudDialogflowV2Sentiment
// The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
type GoogleCloudDialogflowV2Sentiment struct {
	Magnitude *float32 `json:"magnitude,omitempty"`
	Score     *float32 `json:"score,omitempty"`
}
