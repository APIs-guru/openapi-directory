package shared

type NestedVrf struct {
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	PrefixCount *int64  `json:"prefix_count,omitempty"`
	Rd          *string `json:"rd,omitempty"`
	URL         *string `json:"url,omitempty"`
}
