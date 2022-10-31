package shared



type IdentityServiceOidcConfig struct {
    CertificateAuthorityData *string `json:"certificateAuthorityData,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    ClientSecret *string `json:"clientSecret,omitempty"`
    DeployCloudConsoleProxy *bool `json:"deployCloudConsoleProxy,omitempty"`
    EnableAccessToken *bool `json:"enableAccessToken,omitempty"`
    EncryptedClientSecret *string `json:"encryptedClientSecret,omitempty"`
    ExtraParams *string `json:"extraParams,omitempty"`
    GroupPrefix *string `json:"groupPrefix,omitempty"`
    GroupsClaim *string `json:"groupsClaim,omitempty"`
    IssuerURI *string `json:"issuerUri,omitempty"`
    KubectlRedirectURI *string `json:"kubectlRedirectUri,omitempty"`
    Scopes *string `json:"scopes,omitempty"`
    UserClaim *string `json:"userClaim,omitempty"`
    UserPrefix *string `json:"userPrefix,omitempty"`
    
}

