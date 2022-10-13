package shared

type TenantProjectConfig struct {
	BillingConfig        *BillingConfig        `json:"billingConfig"`
	Folder               *string               `json:"folder"`
	Labels               map[string]string     `json:"labels"`
	ServiceAccountConfig *ServiceAccountConfig `json:"serviceAccountConfig"`
	Services             []string              `json:"services"`
	TenantProjectPolicy  *TenantProjectPolicy  `json:"tenantProjectPolicy"`
}
