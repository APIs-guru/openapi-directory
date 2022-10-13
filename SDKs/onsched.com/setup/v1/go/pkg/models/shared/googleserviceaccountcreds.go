package shared

type GoogleServiceAccountCreds struct {
	AuthProviderX509CertURL *string `json:"auth_provider_x509_cert_url"`
	AuthURI                 *string `json:"auth_uri"`
	ClientEmail             *string `json:"client_email"`
	ClientID                *string `json:"client_id"`
	ClientX509CertURL       *string `json:"client_x509_cert_url"`
	PrivateKey              *string `json:"private_key"`
	PrivateKeyID            *string `json:"private_key_id"`
	ProjectID               *string `json:"project_id"`
	TokenURI                *string `json:"token_uri"`
	Type                    *string `json:"type"`
}
