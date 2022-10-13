package shared

type CertificateConfig struct {
	PublicKey      *PublicKey             `json:"publicKey"`
	ReusableConfig *ReusableConfigWrapper `json:"reusableConfig"`
	SubjectConfig  *SubjectConfig         `json:"subjectConfig"`
}
