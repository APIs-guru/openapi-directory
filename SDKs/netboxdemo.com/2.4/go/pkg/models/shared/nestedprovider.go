package shared

type NestedProvider struct {
	ID   *int64  `json:"id,omitempty"`
	Name string  `json:"name"`
	Slug string  `json:"slug"`
	URL  *string `json:"url,omitempty"`
}
