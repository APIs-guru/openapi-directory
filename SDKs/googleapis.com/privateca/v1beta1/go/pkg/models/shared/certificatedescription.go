package shared

type CertificateDescription struct {
	AiaIssuingCertificateUrls []string                `json:"aiaIssuingCertificateUrls"`
	AuthorityKeyID            *KeyID                  `json:"authorityKeyId"`
	CertFingerprint           *CertificateFingerprint `json:"certFingerprint"`
	ConfigValues              *ReusableConfigValues   `json:"configValues"`
	CrlDistributionPoints     []string                `json:"crlDistributionPoints"`
	PublicKey                 *PublicKey              `json:"publicKey"`
	SubjectDescription        *SubjectDescription     `json:"subjectDescription"`
	SubjectKeyID              *KeyID                  `json:"subjectKeyId"`
}
