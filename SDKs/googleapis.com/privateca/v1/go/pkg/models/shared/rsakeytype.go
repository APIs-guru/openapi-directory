package shared

// RsaKeyType
// Describes an RSA key that may be used in a Certificate issued from a CaPool.
type RsaKeyType struct {
	MaxModulusSize *string `json:"maxModulusSize,omitempty"`
	MinModulusSize *string `json:"minModulusSize,omitempty"`
}
