package shared

type WritableTenantGroup struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	Parent      *int64  `json:"parent"`
	Slug        string  `json:"slug"`
	TenantCount *int64  `json:"tenant_count"`
}
