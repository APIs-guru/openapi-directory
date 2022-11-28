package shared

type KeyVersionSpecAlgorithmEnum string

const (
	KeyVersionSpecAlgorithmEnumSignHashAlgorithmUnspecified KeyVersionSpecAlgorithmEnum = "SIGN_HASH_ALGORITHM_UNSPECIFIED"
	KeyVersionSpecAlgorithmEnumRsaPss2048Sha256             KeyVersionSpecAlgorithmEnum = "RSA_PSS_2048_SHA256"
	KeyVersionSpecAlgorithmEnumRsaPss3072Sha256             KeyVersionSpecAlgorithmEnum = "RSA_PSS_3072_SHA256"
	KeyVersionSpecAlgorithmEnumRsaPss4096Sha256             KeyVersionSpecAlgorithmEnum = "RSA_PSS_4096_SHA256"
	KeyVersionSpecAlgorithmEnumRsaPkcs12048Sha256           KeyVersionSpecAlgorithmEnum = "RSA_PKCS1_2048_SHA256"
	KeyVersionSpecAlgorithmEnumRsaPkcs13072Sha256           KeyVersionSpecAlgorithmEnum = "RSA_PKCS1_3072_SHA256"
	KeyVersionSpecAlgorithmEnumRsaPkcs14096Sha256           KeyVersionSpecAlgorithmEnum = "RSA_PKCS1_4096_SHA256"
	KeyVersionSpecAlgorithmEnumEcP256Sha256                 KeyVersionSpecAlgorithmEnum = "EC_P256_SHA256"
	KeyVersionSpecAlgorithmEnumEcP384Sha384                 KeyVersionSpecAlgorithmEnum = "EC_P384_SHA384"
)

// KeyVersionSpec
// A Cloud KMS key configuration that a CertificateAuthority will use.
type KeyVersionSpec struct {
	Algorithm          *KeyVersionSpecAlgorithmEnum `json:"algorithm,omitempty"`
	CloudKmsKeyVersion *string                      `json:"cloudKmsKeyVersion,omitempty"`
}
