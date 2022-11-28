package shared

// CertificateConfig
// A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
type CertificateConfig struct {
	PublicKey     *PublicKey      `json:"publicKey,omitempty"`
	SubjectConfig *SubjectConfig  `json:"subjectConfig,omitempty"`
	X509Config    *X509Parameters `json:"x509Config,omitempty"`
}
