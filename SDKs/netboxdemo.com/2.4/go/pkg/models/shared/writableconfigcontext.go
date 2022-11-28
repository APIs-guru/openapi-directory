package shared

type WritableConfigContextInput struct {
	Data         string  `json:"data"`
	Description  *string `json:"description,omitempty"`
	IsActive     *bool   `json:"is_active,omitempty"`
	Name         string  `json:"name"`
	Platforms    []int64 `json:"platforms,omitempty"`
	Regions      []int64 `json:"regions,omitempty"`
	Roles        []int64 `json:"roles,omitempty"`
	Sites        []int64 `json:"sites,omitempty"`
	TenantGroups []int64 `json:"tenant_groups,omitempty"`
	Tenants      []int64 `json:"tenants,omitempty"`
	Weight       *int64  `json:"weight,omitempty"`
}
