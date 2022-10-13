package shared

type HashTypeEnum string

const (
	HashTypeEnumNone   HashTypeEnum = "NONE"
	HashTypeEnumSha256 HashTypeEnum = "SHA256"
	HashTypeEnumMd5    HashTypeEnum = "MD5"
)

type Hash struct {
	Type  *HashTypeEnum `json:"type"`
	Value *string       `json:"value"`
}
