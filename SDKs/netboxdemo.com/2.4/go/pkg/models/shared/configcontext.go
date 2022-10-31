package shared

type ConfigContext struct {
	Data         string              `json:"data"`
	Description  *string             `json:"description,omitempty"`
	ID           *int64              `json:"id,omitempty"`
	IsActive     *bool               `json:"is_active,omitempty"`
	Name         string              `json:"name"`
	Platforms    []NestedPlatform    `json:"platforms,omitempty"`
	Regions      []NestedRegion      `json:"regions,omitempty"`
	Roles        []NestedDeviceRole  `json:"roles,omitempty"`
	Sites        []NestedSite        `json:"sites,omitempty"`
	TenantGroups []NestedTenantGroup `json:"tenant_groups,omitempty"`
	Tenants      []NestedTenant      `json:"tenants,omitempty"`
	Weight       *int64              `json:"weight,omitempty"`
}
