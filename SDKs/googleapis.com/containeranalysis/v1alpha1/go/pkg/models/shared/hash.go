package shared

type HashTypeEnum string

const (
	HashTypeEnumNone   HashTypeEnum = "NONE"
	HashTypeEnumSha256 HashTypeEnum = "SHA256"
)

type Hash struct {
	Type  *HashTypeEnum `json:"type,omitempty"`
	Value *string       `json:"value,omitempty"`
}
