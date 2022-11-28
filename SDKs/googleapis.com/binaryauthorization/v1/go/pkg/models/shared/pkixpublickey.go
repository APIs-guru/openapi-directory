package shared

type PkixPublicKeySignatureAlgorithmEnum string

const (
	PkixPublicKeySignatureAlgorithmEnumSignatureAlgorithmUnspecified PkixPublicKeySignatureAlgorithmEnum = "SIGNATURE_ALGORITHM_UNSPECIFIED"
	PkixPublicKeySignatureAlgorithmEnumRsaPss2048Sha256              PkixPublicKeySignatureAlgorithmEnum = "RSA_PSS_2048_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPss2048Sha256          PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PSS_2048_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaPss3072Sha256              PkixPublicKeySignatureAlgorithmEnum = "RSA_PSS_3072_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPss3072Sha256          PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PSS_3072_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaPss4096Sha256              PkixPublicKeySignatureAlgorithmEnum = "RSA_PSS_4096_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPss4096Sha256          PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaPss4096Sha512              PkixPublicKeySignatureAlgorithmEnum = "RSA_PSS_4096_SHA512"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPss4096Sha512          PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA512"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs12048Sha256        PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PKCS1_2048_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs13072Sha256        PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PKCS1_3072_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs14096Sha256        PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA256"
	PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs14096Sha512        PkixPublicKeySignatureAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA512"
	PkixPublicKeySignatureAlgorithmEnumEcdsaP256Sha256               PkixPublicKeySignatureAlgorithmEnum = "ECDSA_P256_SHA256"
	PkixPublicKeySignatureAlgorithmEnumEcSignP256Sha256              PkixPublicKeySignatureAlgorithmEnum = "EC_SIGN_P256_SHA256"
	PkixPublicKeySignatureAlgorithmEnumEcdsaP384Sha384               PkixPublicKeySignatureAlgorithmEnum = "ECDSA_P384_SHA384"
	PkixPublicKeySignatureAlgorithmEnumEcSignP384Sha384              PkixPublicKeySignatureAlgorithmEnum = "EC_SIGN_P384_SHA384"
	PkixPublicKeySignatureAlgorithmEnumEcdsaP521Sha512               PkixPublicKeySignatureAlgorithmEnum = "ECDSA_P521_SHA512"
	PkixPublicKeySignatureAlgorithmEnumEcSignP521Sha512              PkixPublicKeySignatureAlgorithmEnum = "EC_SIGN_P521_SHA512"
)

// PkixPublicKey
// A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
type PkixPublicKey struct {
	PublicKeyPem       *string                              `json:"publicKeyPem,omitempty"`
	SignatureAlgorithm *PkixPublicKeySignatureAlgorithmEnum `json:"signatureAlgorithm,omitempty"`
}
