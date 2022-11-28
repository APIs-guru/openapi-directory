package shared

// GoogleCloudDialogflowV2beta1Sentiment
// The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
type GoogleCloudDialogflowV2beta1Sentiment struct {
	Magnitude *float32 `json:"magnitude,omitempty"`
	Score     *float32 `json:"score,omitempty"`
}
