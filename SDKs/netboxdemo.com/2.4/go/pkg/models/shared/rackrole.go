package shared

type RackRole struct {
	Color string `json:"color"`
	ID    *int64 `json:"id"`
	Name  string `json:"name"`
	Slug  string `json:"slug"`
}
