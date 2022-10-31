package shared



type IdentityServiceAuthMethod struct {
    GoogleConfig *IdentityServiceGoogleConfig `json:"googleConfig,omitempty"`
    Name *string `json:"name,omitempty"`
    OidcConfig *IdentityServiceOidcConfig `json:"oidcConfig,omitempty"`
    Proxy *string `json:"proxy,omitempty"`
    
}

