package shared

// CertificateInfo
// Describes an X509 certificate.
type CertificateInfo struct {
	Sha256Fingerprint *string `json:"sha256Fingerprint,omitempty"`
}
