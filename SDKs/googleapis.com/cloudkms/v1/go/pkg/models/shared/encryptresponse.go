package shared




type EncryptResponseProtectionLevelEnum string

const (
    EncryptResponseProtectionLevelEnumProtectionLevelUnspecified EncryptResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
EncryptResponseProtectionLevelEnumSoftware EncryptResponseProtectionLevelEnum = "SOFTWARE"
EncryptResponseProtectionLevelEnumHsm EncryptResponseProtectionLevelEnum = "HSM"
EncryptResponseProtectionLevelEnumExternal EncryptResponseProtectionLevelEnum = "EXTERNAL"
EncryptResponseProtectionLevelEnumExternalVpc EncryptResponseProtectionLevelEnum = "EXTERNAL_VPC"
)


type EncryptResponse struct {
    Ciphertext *string `json:"ciphertext,omitempty"`
    CiphertextCrc32c *string `json:"ciphertextCrc32c,omitempty"`
    Name *string `json:"name,omitempty"`
    ProtectionLevel *EncryptResponseProtectionLevelEnum `json:"protectionLevel,omitempty"`
    VerifiedAdditionalAuthenticatedDataCrc32c *bool `json:"verifiedAdditionalAuthenticatedDataCrc32c,omitempty"`
    VerifiedPlaintextCrc32c *bool `json:"verifiedPlaintextCrc32c,omitempty"`
    
}

