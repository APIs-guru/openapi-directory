package shared

type ServiceAccountConfig struct {
	AccountID          *string  `json:"accountId"`
	TenantProjectRoles []string `json:"tenantProjectRoles"`
}
