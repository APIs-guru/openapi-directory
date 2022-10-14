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
	Algorithm    *DNSKeyAlgorithmEnum `json:"algorithm,omitempty"`
	CreationTime *string              `json:"creationTime,omitempty"`
	Description  *string              `json:"description,omitempty"`
	Digests      []DNSKeyDigest       `json:"digests,omitempty"`
	ID           *string              `json:"id,omitempty"`
	IsActive     *bool                `json:"isActive,omitempty"`
	KeyLength    *int64               `json:"keyLength,omitempty"`
	KeyTag       *int32               `json:"keyTag,omitempty"`
	Kind         *string              `json:"kind,omitempty"`
	PublicKey    *string              `json:"publicKey,omitempty"`
	Type         *DNSKeyTypeEnum      `json:"type,omitempty"`
}
