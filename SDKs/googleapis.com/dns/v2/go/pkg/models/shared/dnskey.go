package shared

type DNSKeyAlgorithmEnum string

const (
	DNSKeyAlgorithmEnumRsasha1         DNSKeyAlgorithmEnum = "RSASHA1"
	DNSKeyAlgorithmEnumRsasha256       DNSKeyAlgorithmEnum = "RSASHA256"
	DNSKeyAlgorithmEnumRsasha512       DNSKeyAlgorithmEnum = "RSASHA512"
	DNSKeyAlgorithmEnumEcdsap256Sha256 DNSKeyAlgorithmEnum = "ECDSAP256SHA256"
	DNSKeyAlgorithmEnumEcdsap384Sha384 DNSKeyAlgorithmEnum = "ECDSAP384SHA384"
)

type DNSKeyTypeEnum string

const (
	DNSKeyTypeEnumKeySigning  DNSKeyTypeEnum = "KEY_SIGNING"
	DNSKeyTypeEnumZoneSigning DNSKeyTypeEnum = "ZONE_SIGNING"
)

type DNSKey struct {
	Algorithm    *DNSKeyAlgorithmEnum `json:"algorithm"`
	CreationTime *string              `json:"creationTime"`
	Description  *string              `json:"description"`
	Digests      []DNSKeyDigest       `json:"digests"`
	ID           *string              `json:"id"`
	IsActive     *bool                `json:"isActive"`
	KeyLength    *int64               `json:"keyLength"`
	KeyTag       *int32               `json:"keyTag"`
	Kind         *string              `json:"kind"`
	PublicKey    *string              `json:"publicKey"`
	Type         *DNSKeyTypeEnum      `json:"type"`
}
