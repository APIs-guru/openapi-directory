package shared




type DNSKeyAlgorithmEnum string

const (
    DNSKeyAlgorithmEnumRsasha1 DNSKeyAlgorithmEnum = "RSASHA1"
DNSKeyAlgorithmEnumRsasha256 DNSKeyAlgorithmEnum = "RSASHA256"
DNSKeyAlgorithmEnumRsasha512 DNSKeyAlgorithmEnum = "RSASHA512"
DNSKeyAlgorithmEnumEcdsap256Sha256 DNSKeyAlgorithmEnum = "ECDSAP256SHA256"
DNSKeyAlgorithmEnumEcdsap384Sha384 DNSKeyAlgorithmEnum = "ECDSAP384SHA384"
)



type DNSKeyTypeEnum string

const (
    DNSKeyTypeEnumKeySigning DNSKeyTypeEnum = "KEY_SIGNING"
DNSKeyTypeEnumZoneSigning DNSKeyTypeEnum = "ZONE_SIGNING"
)


type DNSKey struct {
    Algorithm *DNSKeyAlgorithmEnum `json:"algorithm,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Digests []DNSKeyDigest `json:"digests,omitempty"`
    ID *string `json:"id,omitempty"`
    IsActive *bool `json:"isActive,omitempty"`
    KeyLength *int64 `json:"keyLength,omitempty"`
    KeyTag *int32 `json:"keyTag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PublicKey *string `json:"publicKey,omitempty"`
    Type *DNSKeyTypeEnum `json:"type,omitempty"`
    
}

