package shared




type AsymmetricDecryptResponseProtectionLevelEnum string

const (
    AsymmetricDecryptResponseProtectionLevelEnumProtectionLevelUnspecified AsymmetricDecryptResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
AsymmetricDecryptResponseProtectionLevelEnumSoftware AsymmetricDecryptResponseProtectionLevelEnum = "SOFTWARE"
AsymmetricDecryptResponseProtectionLevelEnumHsm AsymmetricDecryptResponseProtectionLevelEnum = "HSM"
AsymmetricDecryptResponseProtectionLevelEnumExternal AsymmetricDecryptResponseProtectionLevelEnum = "EXTERNAL"
AsymmetricDecryptResponseProtectionLevelEnumExternalVpc AsymmetricDecryptResponseProtectionLevelEnum = "EXTERNAL_VPC"
)


type AsymmetricDecryptResponse struct {
    Plaintext *string `json:"plaintext,omitempty"`
    PlaintextCrc32c *string `json:"plaintextCrc32c,omitempty"`
    ProtectionLevel *AsymmetricDecryptResponseProtectionLevelEnum `json:"protectionLevel,omitempty"`
    VerifiedCiphertextCrc32c *bool `json:"verifiedCiphertextCrc32c,omitempty"`
    
}

