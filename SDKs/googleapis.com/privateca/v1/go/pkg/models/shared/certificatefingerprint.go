package shared

// CertificateFingerprint
// A group of fingerprints for the x509 certificate.
type CertificateFingerprint struct {
	Sha256Hash *string `json:"sha256Hash,omitempty"`
}
