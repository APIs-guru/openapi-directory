package shared

type TenantGroup struct {
	ID   *int64 `json:"id"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}
