package shared

type TenantGroup struct {
	Description *string            `json:"description,omitempty"`
	ID          *int64             `json:"id,omitempty"`
	Name        string             `json:"name"`
	Parent      *NestedTenantGroup `json:"parent,omitempty"`
	Slug        string             `json:"slug"`
	TenantCount *int64             `json:"tenant_count,omitempty"`
}
