package shared

// CertificateDescription
// A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
type CertificateDescription struct {
	AiaIssuingCertificateUrls []string                `json:"aiaIssuingCertificateUrls,omitempty"`
	AuthorityKeyID            *KeyID                  `json:"authorityKeyId,omitempty"`
	CertFingerprint           *CertificateFingerprint `json:"certFingerprint,omitempty"`
	ConfigValues              *ReusableConfigValues   `json:"configValues,omitempty"`
	CrlDistributionPoints     []string                `json:"crlDistributionPoints,omitempty"`
	PublicKey                 *PublicKey              `json:"publicKey,omitempty"`
	SubjectDescription        *SubjectDescription     `json:"subjectDescription,omitempty"`
	SubjectKeyID              *KeyID                  `json:"subjectKeyId,omitempty"`
}
