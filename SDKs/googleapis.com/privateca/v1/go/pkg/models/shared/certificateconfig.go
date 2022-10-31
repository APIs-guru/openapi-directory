package shared

type CertificateConfig struct {
	PublicKey     *PublicKey      `json:"publicKey,omitempty"`
	SubjectConfig *SubjectConfig  `json:"subjectConfig,omitempty"`
	X509Config    *X509Parameters `json:"x509Config,omitempty"`
}
