package shared

type NestedTenantGroup struct {
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	Slug        string  `json:"slug"`
	TenantCount *int64  `json:"tenant_count"`
	URL         *string `json:"url"`
}
