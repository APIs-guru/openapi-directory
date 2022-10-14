package shared

type NestedTenantGroup struct {
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	Slug        string  `json:"slug"`
	TenantCount *int64  `json:"tenant_count,omitempty"`
	URL         *string `json:"url,omitempty"`
}
