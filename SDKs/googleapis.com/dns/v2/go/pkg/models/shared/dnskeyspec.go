package shared

type DNSKeySpecAlgorithmEnum string

const (
	DNSKeySpecAlgorithmEnumRsasha1         DNSKeySpecAlgorithmEnum = "RSASHA1"
	DNSKeySpecAlgorithmEnumRsasha256       DNSKeySpecAlgorithmEnum = "RSASHA256"
	DNSKeySpecAlgorithmEnumRsasha512       DNSKeySpecAlgorithmEnum = "RSASHA512"
	DNSKeySpecAlgorithmEnumEcdsap256Sha256 DNSKeySpecAlgorithmEnum = "ECDSAP256SHA256"
	DNSKeySpecAlgorithmEnumEcdsap384Sha384 DNSKeySpecAlgorithmEnum = "ECDSAP384SHA384"
)

type DNSKeySpecKeyTypeEnum string

const (
	DNSKeySpecKeyTypeEnumKeySigning  DNSKeySpecKeyTypeEnum = "KEY_SIGNING"
	DNSKeySpecKeyTypeEnumZoneSigning DNSKeySpecKeyTypeEnum = "ZONE_SIGNING"
)

type DNSKeySpec struct {
	Algorithm *DNSKeySpecAlgorithmEnum `json:"algorithm,omitempty"`
	KeyLength *int64                   `json:"keyLength,omitempty"`
	KeyType   *DNSKeySpecKeyTypeEnum   `json:"keyType,omitempty"`
	Kind      *string                  `json:"kind,omitempty"`
}
