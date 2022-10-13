package shared

type TenancyUnit struct {
	Consumer        *string          `json:"consumer"`
	CreateTime      *string          `json:"createTime"`
	Name            *string          `json:"name"`
	Service         *string          `json:"service"`
	TenantResources []TenantResource `json:"tenantResources"`
}
