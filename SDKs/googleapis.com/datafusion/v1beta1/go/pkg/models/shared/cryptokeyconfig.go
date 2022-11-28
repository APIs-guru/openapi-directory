package shared

// CryptoKeyConfig
// The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
type CryptoKeyConfig struct {
	KeyReference *string `json:"keyReference,omitempty"`
}
