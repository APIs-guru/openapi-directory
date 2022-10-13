package shared

type NestedRackGroup struct {
	ID        *int64  `json:"id"`
	Name      string  `json:"name"`
	RackCount *int64  `json:"rack_count"`
	Slug      string  `json:"slug"`
	URL       *string `json:"url"`
}
