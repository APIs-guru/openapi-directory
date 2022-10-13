package shared

type IdentityServiceAuthMethod struct {
	GoogleConfig *IdentityServiceGoogleConfig `json:"googleConfig"`
	Name         *string                      `json:"name"`
	OidcConfig   *IdentityServiceOidcConfig   `json:"oidcConfig"`
	Proxy        *string                      `json:"proxy"`
}
