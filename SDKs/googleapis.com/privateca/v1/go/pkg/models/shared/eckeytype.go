package shared

type EcKeyTypeSignatureAlgorithmEnum string

const (
	EcKeyTypeSignatureAlgorithmEnumEcSignatureAlgorithmUnspecified EcKeyTypeSignatureAlgorithmEnum = "EC_SIGNATURE_ALGORITHM_UNSPECIFIED"
	EcKeyTypeSignatureAlgorithmEnumEcdsaP256                       EcKeyTypeSignatureAlgorithmEnum = "ECDSA_P256"
	EcKeyTypeSignatureAlgorithmEnumEcdsaP384                       EcKeyTypeSignatureAlgorithmEnum = "ECDSA_P384"
	EcKeyTypeSignatureAlgorithmEnumEddsa25519                      EcKeyTypeSignatureAlgorithmEnum = "EDDSA_25519"
)

// EcKeyType
// Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool.
type EcKeyType struct {
	SignatureAlgorithm *EcKeyTypeSignatureAlgorithmEnum `json:"signatureAlgorithm,omitempty"`
}
