package shared

type DNSKeySpecAlgorithmEnum string

const (
	DNSKeySpecAlgorithmEnumRsasha1         DNSKeySpecAlgorithmEnum = "rsasha1"
	DNSKeySpecAlgorithmEnumRsasha256       DNSKeySpecAlgorithmEnum = "rsasha256"
	DNSKeySpecAlgorithmEnumRsasha512       DNSKeySpecAlgorithmEnum = "rsasha512"
	DNSKeySpecAlgorithmEnumEcdsap256sha256 DNSKeySpecAlgorithmEnum = "ecdsap256sha256"
	DNSKeySpecAlgorithmEnumEcdsap384sha384 DNSKeySpecAlgorithmEnum = "ecdsap384sha384"
)

type DNSKeySpecKeyTypeEnum string

const (
	DNSKeySpecKeyTypeEnumKeySigning  DNSKeySpecKeyTypeEnum = "keySigning"
	DNSKeySpecKeyTypeEnumZoneSigning DNSKeySpecKeyTypeEnum = "zoneSigning"
)

type DNSKeySpec struct {
	Algorithm *DNSKeySpecAlgorithmEnum `json:"algorithm"`
	KeyLength *int64                   `json:"keyLength"`
	KeyType   *DNSKeySpecKeyTypeEnum   `json:"keyType"`
	Kind      *string                  `json:"kind"`
}
