package shared

// TenantProjectConfig
// This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
type TenantProjectConfig struct {
	BillingConfig        *BillingConfig        `json:"billingConfig,omitempty"`
	Folder               *string               `json:"folder,omitempty"`
	Labels               map[string]string     `json:"labels,omitempty"`
	ServiceAccountConfig *ServiceAccountConfig `json:"serviceAccountConfig,omitempty"`
	Services             []string              `json:"services,omitempty"`
	TenantProjectPolicy  *TenantProjectPolicy  `json:"tenantProjectPolicy,omitempty"`
}
