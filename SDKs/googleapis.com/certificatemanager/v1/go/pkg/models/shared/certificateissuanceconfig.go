package shared

type CertificateIssuanceConfigKeyAlgorithmEnum string

const (
	CertificateIssuanceConfigKeyAlgorithmEnumKeyAlgorithmUnspecified CertificateIssuanceConfigKeyAlgorithmEnum = "KEY_ALGORITHM_UNSPECIFIED"
	CertificateIssuanceConfigKeyAlgorithmEnumRsa2048                 CertificateIssuanceConfigKeyAlgorithmEnum = "RSA_2048"
	CertificateIssuanceConfigKeyAlgorithmEnumEcdsaP256               CertificateIssuanceConfigKeyAlgorithmEnum = "ECDSA_P256"
)

type CertificateIssuanceConfig struct {
	CertificateAuthorityConfig *CertificateAuthorityConfig                `json:"certificateAuthorityConfig"`
	CreateTime                 *string                                    `json:"createTime"`
	Description                *string                                    `json:"description"`
	KeyAlgorithm               *CertificateIssuanceConfigKeyAlgorithmEnum `json:"keyAlgorithm"`
	Labels                     map[string]string                          `json:"labels"`
	Lifetime                   *string                                    `json:"lifetime"`
	Name                       *string                                    `json:"name"`
	RotationWindowPercentage   *int32                                     `json:"rotationWindowPercentage"`
	UpdateTime                 *string                                    `json:"updateTime"`
}
