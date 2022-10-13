package shared

type ConfigContext struct {
	Data         string              `json:"data"`
	Description  *string             `json:"description"`
	ID           *int64              `json:"id"`
	IsActive     *bool               `json:"is_active"`
	Name         string              `json:"name"`
	Platforms    []NestedPlatform    `json:"platforms"`
	Regions      []NestedRegion      `json:"regions"`
	Roles        []NestedDeviceRole  `json:"roles"`
	Sites        []NestedSite        `json:"sites"`
	TenantGroups []NestedTenantGroup `json:"tenant_groups"`
	Tenants      []NestedTenant      `json:"tenants"`
	Weight       *int64              `json:"weight"`
}
