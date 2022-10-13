package shared

type KeyUsage struct {
	BaseKeyUsage             *KeyUsageOptions         `json:"baseKeyUsage"`
	ExtendedKeyUsage         *ExtendedKeyUsageOptions `json:"extendedKeyUsage"`
	UnknownExtendedKeyUsages []ObjectID               `json:"unknownExtendedKeyUsages"`
}
