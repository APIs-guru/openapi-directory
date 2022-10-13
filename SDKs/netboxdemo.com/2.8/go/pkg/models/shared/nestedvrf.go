package shared

type NestedVrf struct {
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	PrefixCount *int64  `json:"prefix_count"`
	Rd          *string `json:"rd"`
	URL         *string `json:"url"`
}
