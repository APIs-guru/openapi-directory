package shared

type CryptoKeyPurposeEnum string

const (
	CryptoKeyPurposeEnumCryptoKeyPurposeUnspecified CryptoKeyPurposeEnum = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
	CryptoKeyPurposeEnumEncryptDecrypt              CryptoKeyPurposeEnum = "ENCRYPT_DECRYPT"
	CryptoKeyPurposeEnumAsymmetricSign              CryptoKeyPurposeEnum = "ASYMMETRIC_SIGN"
	CryptoKeyPurposeEnumAsymmetricDecrypt           CryptoKeyPurposeEnum = "ASYMMETRIC_DECRYPT"
	CryptoKeyPurposeEnumMac                         CryptoKeyPurposeEnum = "MAC"
)

// CryptoKeyInput
// A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
type CryptoKeyInput struct {
	CryptoKeyBackend         *string                   `json:"cryptoKeyBackend,omitempty"`
	DestroyScheduledDuration *string                   `json:"destroyScheduledDuration,omitempty"`
	ImportOnly               *bool                     `json:"importOnly,omitempty"`
	Labels                   map[string]string         `json:"labels,omitempty"`
	NextRotationTime         *string                   `json:"nextRotationTime,omitempty"`
	Primary                  *CryptoKeyVersionInput    `json:"primary,omitempty"`
	Purpose                  *CryptoKeyPurposeEnum     `json:"purpose,omitempty"`
	RotationPeriod           *string                   `json:"rotationPeriod,omitempty"`
	VersionTemplate          *CryptoKeyVersionTemplate `json:"versionTemplate,omitempty"`
}

// CryptoKey
// A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
type CryptoKey struct {
	CreateTime               *string                   `json:"createTime,omitempty"`
	CryptoKeyBackend         *string                   `json:"cryptoKeyBackend,omitempty"`
	DestroyScheduledDuration *string                   `json:"destroyScheduledDuration,omitempty"`
	ImportOnly               *bool                     `json:"importOnly,omitempty"`
	Labels                   map[string]string         `json:"labels,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	NextRotationTime         *string                   `json:"nextRotationTime,omitempty"`
	Primary                  *CryptoKeyVersion         `json:"primary,omitempty"`
	Purpose                  *CryptoKeyPurposeEnum     `json:"purpose,omitempty"`
	RotationPeriod           *string                   `json:"rotationPeriod,omitempty"`
	VersionTemplate          *CryptoKeyVersionTemplate `json:"versionTemplate,omitempty"`
}
