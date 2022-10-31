package shared

type PublicKeyTypeEnum string

const (
	PublicKeyTypeEnumKeyTypeUnspecified PublicKeyTypeEnum = "KEY_TYPE_UNSPECIFIED"
	PublicKeyTypeEnumPemRsaKey          PublicKeyTypeEnum = "PEM_RSA_KEY"
	PublicKeyTypeEnumPemEcKey           PublicKeyTypeEnum = "PEM_EC_KEY"
)

type PublicKey struct {
	Key  *string            `json:"key,omitempty"`
	Type *PublicKeyTypeEnum `json:"type,omitempty"`
}
