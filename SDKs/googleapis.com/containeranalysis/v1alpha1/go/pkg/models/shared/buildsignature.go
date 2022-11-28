package shared

type BuildSignatureKeyTypeEnum string

const (
	BuildSignatureKeyTypeEnumKeyTypeUnspecified BuildSignatureKeyTypeEnum = "KEY_TYPE_UNSPECIFIED"
	BuildSignatureKeyTypeEnumPgpASCIIArmored    BuildSignatureKeyTypeEnum = "PGP_ASCII_ARMORED"
	BuildSignatureKeyTypeEnumPkixPem            BuildSignatureKeyTypeEnum = "PKIX_PEM"
)

// BuildSignature
// Message encapsulating the signature of the verified build.
type BuildSignature struct {
	KeyID     *string                    `json:"keyId,omitempty"`
	KeyType   *BuildSignatureKeyTypeEnum `json:"keyType,omitempty"`
	PublicKey *string                    `json:"publicKey,omitempty"`
	Signature *string                    `json:"signature,omitempty"`
}
