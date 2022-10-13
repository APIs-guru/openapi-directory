package shared

type DNSKeyAlgorithmEnum string

const (
	DNSKeyAlgorithmEnumRsasha1         DNSKeyAlgorithmEnum = "rsasha1"
	DNSKeyAlgorithmEnumRsasha256       DNSKeyAlgorithmEnum = "rsasha256"
	DNSKeyAlgorithmEnumRsasha512       DNSKeyAlgorithmEnum = "rsasha512"
	DNSKeyAlgorithmEnumEcdsap256sha256 DNSKeyAlgorithmEnum = "ecdsap256sha256"
	DNSKeyAlgorithmEnumEcdsap384sha384 DNSKeyAlgorithmEnum = "ecdsap384sha384"
)

type DNSKeyTypeEnum string

const (
	DNSKeyTypeEnumKeySigning  DNSKeyTypeEnum = "keySigning"
	DNSKeyTypeEnumZoneSigning DNSKeyTypeEnum = "zoneSigning"
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
