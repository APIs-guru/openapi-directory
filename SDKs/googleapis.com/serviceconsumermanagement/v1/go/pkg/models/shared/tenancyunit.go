package shared



type TenancyUnit struct {
    Consumer *string `json:"consumer,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Service *string `json:"service,omitempty"`
    TenantResources []TenantResource `json:"tenantResources,omitempty"`
    
}

