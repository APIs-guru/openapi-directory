package shared

type WritableConfigContext struct {
	Data         string  `json:"data"`
	Description  *string `json:"description"`
	ID           *int64  `json:"id"`
	IsActive     *bool   `json:"is_active"`
	Name         string  `json:"name"`
	Platforms    []int64 `json:"platforms"`
	Regions      []int64 `json:"regions"`
	Roles        []int64 `json:"roles"`
	Sites        []int64 `json:"sites"`
	TenantGroups []int64 `json:"tenant_groups"`
	Tenants      []int64 `json:"tenants"`
	Weight       *int64  `json:"weight"`
}
