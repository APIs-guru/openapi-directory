package shared

// CertificateAuthorityConfig
// The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
type CertificateAuthorityConfig struct {
	CertificateAuthorityServiceConfig *CertificateAuthorityServiceConfig `json:"certificateAuthorityServiceConfig,omitempty"`
}
