package shared

type Sentiment struct {
	Magnitude *float32 `json:"magnitude,omitempty"`
	Polarity  *float32 `json:"polarity,omitempty"`
	Score     *float32 `json:"score,omitempty"`
}
