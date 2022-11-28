package shared

// GoogleCloudIntegrationsV1alphaClientCertificate
// Contains client certificate information
type GoogleCloudIntegrationsV1alphaClientCertificate struct {
	EncryptedPrivateKey *string `json:"encryptedPrivateKey,omitempty"`
	Passphrase          *string `json:"passphrase,omitempty"`
	SslCertificate      *string `json:"sslCertificate,omitempty"`
}
