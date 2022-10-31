package shared

type SelfManagedCertificate struct {
	PemCertificate *string `json:"pemCertificate,omitempty"`
	PemPrivateKey  *string `json:"pemPrivateKey,omitempty"`
}
