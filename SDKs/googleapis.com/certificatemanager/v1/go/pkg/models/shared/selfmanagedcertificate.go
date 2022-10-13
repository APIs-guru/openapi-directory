package shared

type SelfManagedCertificate struct {
	PemCertificate *string `json:"pemCertificate"`
	PemPrivateKey  *string `json:"pemPrivateKey"`
}
