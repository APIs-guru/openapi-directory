package shared

// CertificateAuthorityServiceConfig
// Contains information required to contact CA service.
type CertificateAuthorityServiceConfig struct {
	CaPool *string `json:"caPool,omitempty"`
}
