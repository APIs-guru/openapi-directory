package shared

type HashTypeEnum string

const (
	HashTypeEnumNone   HashTypeEnum = "NONE"
	HashTypeEnumSha256 HashTypeEnum = "SHA256"
	HashTypeEnumMd5    HashTypeEnum = "MD5"
)

// Hash
// Container message for hash values.
type Hash struct {
	Type  *HashTypeEnum `json:"type,omitempty"`
	Value *string       `json:"value,omitempty"`
}
