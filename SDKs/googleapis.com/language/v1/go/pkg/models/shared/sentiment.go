package shared

type Sentiment struct {
	Magnitude *float32 `json:"magnitude"`
	Score     *float32 `json:"score"`
}
