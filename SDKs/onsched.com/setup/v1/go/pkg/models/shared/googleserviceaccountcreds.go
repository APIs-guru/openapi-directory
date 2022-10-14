package shared

type GoogleServiceAccountCreds struct {
	AuthProviderX509CertURL *string `json:"auth_provider_x509_cert_url,omitempty"`
	AuthURI                 *string `json:"auth_uri,omitempty"`
	ClientEmail             *string `json:"client_email,omitempty"`
	ClientID                *string `json:"client_id,omitempty"`
	ClientX509CertURL       *string `json:"client_x509_cert_url,omitempty"`
	PrivateKey              *string `json:"private_key,omitempty"`
	PrivateKeyID            *string `json:"private_key_id,omitempty"`
	ProjectID               *string `json:"project_id,omitempty"`
	TokenURI                *string `json:"token_uri,omitempty"`
	Type                    *string `json:"type,omitempty"`
}
