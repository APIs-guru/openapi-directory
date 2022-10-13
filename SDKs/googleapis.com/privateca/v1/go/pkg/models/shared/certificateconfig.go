package shared

type CertificateConfig struct {
	PublicKey     *PublicKey      `json:"publicKey"`
	SubjectConfig *SubjectConfig  `json:"subjectConfig"`
	X509Config    *X509Parameters `json:"x509Config"`
}
