package shared

type EncryptResponseProtectionLevelEnum string

const (
	EncryptResponseProtectionLevelEnumProtectionLevelUnspecified EncryptResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	EncryptResponseProtectionLevelEnumSoftware                   EncryptResponseProtectionLevelEnum = "SOFTWARE"
	EncryptResponseProtectionLevelEnumHsm                        EncryptResponseProtectionLevelEnum = "HSM"
	EncryptResponseProtectionLevelEnumExternal                   EncryptResponseProtectionLevelEnum = "EXTERNAL"
	EncryptResponseProtectionLevelEnumExternalVpc                EncryptResponseProtectionLevelEnum = "EXTERNAL_VPC"
)

type EncryptResponse struct {
	Ciphertext                                *string                             `json:"ciphertext"`
	CiphertextCrc32c                          *string                             `json:"ciphertextCrc32c"`
	Name                                      *string                             `json:"name"`
	ProtectionLevel                           *EncryptResponseProtectionLevelEnum `json:"protectionLevel"`
	VerifiedAdditionalAuthenticatedDataCrc32c *bool                               `json:"verifiedAdditionalAuthenticatedDataCrc32c"`
	VerifiedPlaintextCrc32c                   *bool                               `json:"verifiedPlaintextCrc32c"`
}
