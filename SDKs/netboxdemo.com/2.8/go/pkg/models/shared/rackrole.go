package shared

type RackRole struct {
	Color       *string `json:"color"`
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	RackCount   *int64  `json:"rack_count"`
	Slug        string  `json:"slug"`
}
