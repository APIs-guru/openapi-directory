package shared

// ServiceAccountConfig
// Describes the service account configuration for the tenant project.
type ServiceAccountConfig struct {
	AccountID          *string  `json:"accountId,omitempty"`
	TenantProjectRoles []string `json:"tenantProjectRoles,omitempty"`
}
