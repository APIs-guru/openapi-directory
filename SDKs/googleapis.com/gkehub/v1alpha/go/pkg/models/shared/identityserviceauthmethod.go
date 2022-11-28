package shared

// IdentityServiceAuthMethod
// Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
type IdentityServiceAuthMethod struct {
	AzureadConfig *IdentityServiceAzureAdConfig `json:"azureadConfig,omitempty"`
	GoogleConfig  *IdentityServiceGoogleConfig  `json:"googleConfig,omitempty"`
	Name          *string                       `json:"name,omitempty"`
	OidcConfig    *IdentityServiceOidcConfig    `json:"oidcConfig,omitempty"`
	Proxy         *string                       `json:"proxy,omitempty"`
}

// IdentityServiceAuthMethodInput
// Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
type IdentityServiceAuthMethodInput struct {
	AzureadConfig *IdentityServiceAzureAdConfigInput `json:"azureadConfig,omitempty"`
	GoogleConfig  *IdentityServiceGoogleConfig       `json:"googleConfig,omitempty"`
	Name          *string                            `json:"name,omitempty"`
	OidcConfig    *IdentityServiceOidcConfigInput    `json:"oidcConfig,omitempty"`
	Proxy         *string                            `json:"proxy,omitempty"`
}
