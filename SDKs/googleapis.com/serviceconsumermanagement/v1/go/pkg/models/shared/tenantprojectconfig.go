package shared



type TenantProjectConfig struct {
    BillingConfig *BillingConfig `json:"billingConfig,omitempty"`
    Folder *string `json:"folder,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    ServiceAccountConfig *ServiceAccountConfig `json:"serviceAccountConfig,omitempty"`
    Services []string `json:"services,omitempty"`
    TenantProjectPolicy *TenantProjectPolicy `json:"tenantProjectPolicy,omitempty"`
    
}

