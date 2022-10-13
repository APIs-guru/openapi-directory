package shared

type Sentiment struct {
	Magnitude *float32 `json:"magnitude"`
	Polarity  *float32 `json:"polarity"`
	Score     *float32 `json:"score"`
}
