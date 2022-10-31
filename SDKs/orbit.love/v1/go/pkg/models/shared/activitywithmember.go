package shared

type ActivityWithMember struct {
	ActivityType *string  `json:"activity_type,omitempty"`
	Description  *string  `json:"description,omitempty"`
	Key          *string  `json:"key,omitempty"`
	Link         *string  `json:"link,omitempty"`
	LinkText     *string  `json:"link_text,omitempty"`
	Member       *Member  `json:"member,omitempty"`
	OccurredAt   *string  `json:"occurred_at,omitempty"`
	Tags         []string `json:"tags,omitempty"`
	Title        string   `json:"title"`
	Weight       *string  `json:"weight,omitempty"`
}
