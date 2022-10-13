package shared

type Activity struct {
	ActivityType *string  `json:"activity_type"`
	Description  *string  `json:"description"`
	Key          *string  `json:"key"`
	Link         *string  `json:"link"`
	LinkText     *string  `json:"link_text"`
	OccurredAt   *string  `json:"occurred_at"`
	Tags         []string `json:"tags"`
	Title        string   `json:"title"`
	Weight       *string  `json:"weight"`
}
