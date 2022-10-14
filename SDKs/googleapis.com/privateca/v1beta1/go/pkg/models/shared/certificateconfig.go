package shared

type CertificateConfig struct {
	PublicKey      *PublicKey             `json:"publicKey,omitempty"`
	ReusableConfig *ReusableConfigWrapper `json:"reusableConfig,omitempty"`
	SubjectConfig  *SubjectConfig         `json:"subjectConfig,omitempty"`
}
