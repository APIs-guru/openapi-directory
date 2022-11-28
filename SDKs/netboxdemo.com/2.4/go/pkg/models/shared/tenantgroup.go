package shared

type TenantGroupInput struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type TenantGroup struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}
