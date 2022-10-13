package shared

type GoogleCloudIntegrationsV1alphaClientCertificate struct {
	EncryptedPrivateKey *string `json:"encryptedPrivateKey"`
	Passphrase          *string `json:"passphrase"`
	SslCertificate      *string `json:"sslCertificate"`
}
