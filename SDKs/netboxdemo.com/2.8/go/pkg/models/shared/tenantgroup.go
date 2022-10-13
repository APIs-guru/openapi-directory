package shared

type TenantGroup struct {
	Description *string            `json:"description"`
	ID          *int64             `json:"id"`
	Name        string             `json:"name"`
	Parent      *NestedTenantGroup `json:"parent"`
	Slug        string             `json:"slug"`
	TenantCount *int64             `json:"tenant_count"`
}
