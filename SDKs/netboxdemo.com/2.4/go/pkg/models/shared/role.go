package shared

type Role struct {
	ID     *int64 `json:"id,omitempty"`
	Name   string `json:"name"`
	Slug   string `json:"slug"`
	Weight *int64 `json:"weight,omitempty"`
}

type RoleInput struct {
	Name   string `json:"name"`
	Slug   string `json:"slug"`
	Weight *int64 `json:"weight,omitempty"`
}
