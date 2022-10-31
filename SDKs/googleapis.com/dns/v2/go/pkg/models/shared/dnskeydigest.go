package shared




type DNSKeyDigestTypeEnum string

const (
    DNSKeyDigestTypeEnumSha1 DNSKeyDigestTypeEnum = "SHA1"
DNSKeyDigestTypeEnumSha256 DNSKeyDigestTypeEnum = "SHA256"
DNSKeyDigestTypeEnumSha384 DNSKeyDigestTypeEnum = "SHA384"
)


type DNSKeyDigest struct {
    Digest *string `json:"digest,omitempty"`
    Type *DNSKeyDigestTypeEnum `json:"type,omitempty"`
    
}

