package shared




type CertificateIssuanceConfigKeyAlgorithmEnum string

const (
    CertificateIssuanceConfigKeyAlgorithmEnumKeyAlgorithmUnspecified CertificateIssuanceConfigKeyAlgorithmEnum = "KEY_ALGORITHM_UNSPECIFIED"
CertificateIssuanceConfigKeyAlgorithmEnumRsa2048 CertificateIssuanceConfigKeyAlgorithmEnum = "RSA_2048"
CertificateIssuanceConfigKeyAlgorithmEnumEcdsaP256 CertificateIssuanceConfigKeyAlgorithmEnum = "ECDSA_P256"
)


type CertificateIssuanceConfig struct {
    CertificateAuthorityConfig *CertificateAuthorityConfig `json:"certificateAuthorityConfig,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    KeyAlgorithm *CertificateIssuanceConfigKeyAlgorithmEnum `json:"keyAlgorithm,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Lifetime *string `json:"lifetime,omitempty"`
    Name *string `json:"name,omitempty"`
    RotationWindowPercentage *int32 `json:"rotationWindowPercentage,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

