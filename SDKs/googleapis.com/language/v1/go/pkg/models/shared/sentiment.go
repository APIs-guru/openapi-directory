package shared

// Sentiment
// Represents the feeling associated with the entire text or entities in the text.
type Sentiment struct {
	Magnitude *float32 `json:"magnitude,omitempty"`
	Score     *float32 `json:"score,omitempty"`
}
