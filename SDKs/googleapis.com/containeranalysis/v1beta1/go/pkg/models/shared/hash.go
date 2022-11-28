package shared

type HashTypeEnum string

const (
	HashTypeEnumHashTypeUnspecified HashTypeEnum = "HASH_TYPE_UNSPECIFIED"
	HashTypeEnumSha256              HashTypeEnum = "SHA256"
)

// Hash
// Container message for hash values.
type Hash struct {
	Type  *HashTypeEnum `json:"type,omitempty"`
	Value *string       `json:"value,omitempty"`
}
