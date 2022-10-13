package shared

type Rir struct {
	AggregateCount *int64  `json:"aggregate_count"`
	Description    *string `json:"description"`
	ID             *int64  `json:"id"`
	IsPrivate      *bool   `json:"is_private"`
	Name           string  `json:"name"`
	Slug           string  `json:"slug"`
}
