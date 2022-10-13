package shared

type NestedRir struct {
	AggregateCount *int64  `json:"aggregate_count"`
	ID             *int64  `json:"id"`
	Name           string  `json:"name"`
	Slug           string  `json:"slug"`
	URL            *string `json:"url"`
}
