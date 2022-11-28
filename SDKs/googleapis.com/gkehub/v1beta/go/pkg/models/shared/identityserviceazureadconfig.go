package shared

// IdentityServiceAzureAdConfigInput
// Configuration for the AzureAD Auth flow.
type IdentityServiceAzureAdConfigInput struct {
	ClientID           *string `json:"clientId,omitempty"`
	ClientSecret       *string `json:"clientSecret,omitempty"`
	KubectlRedirectURI *string `json:"kubectlRedirectUri,omitempty"`
	Tenant             *string `json:"tenant,omitempty"`
}

// IdentityServiceAzureAdConfig
// Configuration for the AzureAD Auth flow.
type IdentityServiceAzureAdConfig struct {
	ClientID              *string `json:"clientId,omitempty"`
	ClientSecret          *string `json:"clientSecret,omitempty"`
	EncryptedClientSecret *string `json:"encryptedClientSecret,omitempty"`
	KubectlRedirectURI    *string `json:"kubectlRedirectUri,omitempty"`
	Tenant                *string `json:"tenant,omitempty"`
}
