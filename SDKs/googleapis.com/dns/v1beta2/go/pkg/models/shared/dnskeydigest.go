package shared

type DNSKeyDigestTypeEnum string

const (
	DNSKeyDigestTypeEnumSha1   DNSKeyDigestTypeEnum = "sha1"
	DNSKeyDigestTypeEnumSha256 DNSKeyDigestTypeEnum = "sha256"
	DNSKeyDigestTypeEnumSha384 DNSKeyDigestTypeEnum = "sha384"
)

type DNSKeyDigest struct {
	Digest *string               `json:"digest,omitempty"`
	Type   *DNSKeyDigestTypeEnum `json:"type,omitempty"`
}
