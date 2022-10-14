package shared

type ServiceAccountConfig struct {
	AccountID          *string  `json:"accountId,omitempty"`
	TenantProjectRoles []string `json:"tenantProjectRoles,omitempty"`
}
