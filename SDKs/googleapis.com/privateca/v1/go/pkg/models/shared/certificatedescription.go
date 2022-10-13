package shared

type CertificateDescription struct {
	AiaIssuingCertificateUrls []string                `json:"aiaIssuingCertificateUrls"`
	AuthorityKeyID            *KeyID                  `json:"authorityKeyId"`
	CertFingerprint           *CertificateFingerprint `json:"certFingerprint"`
	CrlDistributionPoints     []string                `json:"crlDistributionPoints"`
	PublicKey                 *PublicKey              `json:"publicKey"`
	SubjectDescription        *SubjectDescription     `json:"subjectDescription"`
	SubjectKeyID              *KeyID                  `json:"subjectKeyId"`
	X509Description           *X509Parameters         `json:"x509Description"`
}
