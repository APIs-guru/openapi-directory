package shared

type NestedProvider struct {
	CircuitCount *int64  `json:"circuit_count,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
	URL          *string `json:"url,omitempty"`
}
