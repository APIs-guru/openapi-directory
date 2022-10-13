package shared

type CryptoKeyPurposeEnum string

const (
	CryptoKeyPurposeEnumCryptoKeyPurposeUnspecified CryptoKeyPurposeEnum = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
	CryptoKeyPurposeEnumEncryptDecrypt              CryptoKeyPurposeEnum = "ENCRYPT_DECRYPT"
	CryptoKeyPurposeEnumAsymmetricSign              CryptoKeyPurposeEnum = "ASYMMETRIC_SIGN"
	CryptoKeyPurposeEnumAsymmetricDecrypt           CryptoKeyPurposeEnum = "ASYMMETRIC_DECRYPT"
	CryptoKeyPurposeEnumMac                         CryptoKeyPurposeEnum = "MAC"
)

type CryptoKey struct {
	CreateTime               *string                   `json:"createTime"`
	CryptoKeyBackend         *string                   `json:"cryptoKeyBackend"`
	DestroyScheduledDuration *string                   `json:"destroyScheduledDuration"`
	ImportOnly               *bool                     `json:"importOnly"`
	Labels                   map[string]string         `json:"labels"`
	Name                     *string                   `json:"name"`
	NextRotationTime         *string                   `json:"nextRotationTime"`
	Primary                  *CryptoKeyVersion         `json:"primary"`
	Purpose                  *CryptoKeyPurposeEnum     `json:"purpose"`
	RotationPeriod           *string                   `json:"rotationPeriod"`
	VersionTemplate          *CryptoKeyVersionTemplate `json:"versionTemplate"`
}
