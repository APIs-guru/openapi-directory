package shared

type PublicKeyTypeEnum string

const (
	PublicKeyTypeEnumKeyTypeUnspecified PublicKeyTypeEnum = "KEY_TYPE_UNSPECIFIED"
	PublicKeyTypeEnumPemRsaKey          PublicKeyTypeEnum = "PEM_RSA_KEY"
	PublicKeyTypeEnumPemEcKey           PublicKeyTypeEnum = "PEM_EC_KEY"
)

// PublicKey
// A PublicKey describes a public key.
type PublicKey struct {
	Key  *string            `json:"key,omitempty"`
	Type *PublicKeyTypeEnum `json:"type,omitempty"`
}
