package shared

type IdentityServiceOidcConfig struct {
	CertificateAuthorityData *string `json:"certificateAuthorityData"`
	ClientID                 *string `json:"clientId"`
	ClientSecret             *string `json:"clientSecret"`
	DeployCloudConsoleProxy  *bool   `json:"deployCloudConsoleProxy"`
	EnableAccessToken        *bool   `json:"enableAccessToken"`
	EncryptedClientSecret    *string `json:"encryptedClientSecret"`
	ExtraParams              *string `json:"extraParams"`
	GroupPrefix              *string `json:"groupPrefix"`
	GroupsClaim              *string `json:"groupsClaim"`
	IssuerURI                *string `json:"issuerUri"`
	KubectlRedirectURI       *string `json:"kubectlRedirectUri"`
	Scopes                   *string `json:"scopes"`
	UserClaim                *string `json:"userClaim"`
	UserPrefix               *string `json:"userPrefix"`
}
