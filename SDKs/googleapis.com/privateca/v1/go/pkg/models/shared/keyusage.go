package shared

// KeyUsage
// A KeyUsage describes key usage values that may appear in an X.509 certificate.
type KeyUsage struct {
	BaseKeyUsage             *KeyUsageOptions         `json:"baseKeyUsage,omitempty"`
	ExtendedKeyUsage         *ExtendedKeyUsageOptions `json:"extendedKeyUsage,omitempty"`
	UnknownExtendedKeyUsages []ObjectID               `json:"unknownExtendedKeyUsages,omitempty"`
}
