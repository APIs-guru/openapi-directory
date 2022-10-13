package shared

type NestedRackGroup struct {
	ID   *int64  `json:"id"`
	Name string  `json:"name"`
	Slug string  `json:"slug"`
	URL  *string `json:"url"`
}
