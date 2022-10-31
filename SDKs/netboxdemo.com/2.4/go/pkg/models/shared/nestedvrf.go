package shared

type NestedVrf struct {
	ID   *int64  `json:"id,omitempty"`
	Name string  `json:"name"`
	Rd   string  `json:"rd"`
	URL  *string `json:"url,omitempty"`
}
