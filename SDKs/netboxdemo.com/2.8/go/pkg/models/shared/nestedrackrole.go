package shared

type NestedRackRole struct {
	ID        *int64  `json:"id,omitempty"`
	Name      string  `json:"name"`
	RackCount *int64  `json:"rack_count,omitempty"`
	Slug      string  `json:"slug"`
	URL       *string `json:"url,omitempty"`
}
