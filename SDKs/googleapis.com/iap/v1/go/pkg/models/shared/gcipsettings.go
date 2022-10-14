package shared

type GcipSettings struct {
	LoginPageURI *string  `json:"loginPageUri,omitempty"`
	TenantIds    []string `json:"tenantIds,omitempty"`
}
