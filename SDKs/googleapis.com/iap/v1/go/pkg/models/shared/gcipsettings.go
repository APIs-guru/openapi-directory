package shared

// GcipSettings
// Allows customers to configure tenant_id for GCIP instance per-app.
type GcipSettings struct {
	LoginPageURI *string  `json:"loginPageUri,omitempty"`
	TenantIds    []string `json:"tenantIds,omitempty"`
}
