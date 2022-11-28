package shared

type RackRoleInput struct {
	Color string `json:"color"`
	Name  string `json:"name"`
	Slug  string `json:"slug"`
}

type RackRole struct {
	Color string `json:"color"`
	ID    *int64 `json:"id,omitempty"`
	Name  string `json:"name"`
	Slug  string `json:"slug"`
}
