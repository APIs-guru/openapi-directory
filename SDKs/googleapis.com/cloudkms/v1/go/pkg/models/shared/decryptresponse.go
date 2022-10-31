package shared




type DecryptResponseProtectionLevelEnum string

const (
    DecryptResponseProtectionLevelEnumProtectionLevelUnspecified DecryptResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
DecryptResponseProtectionLevelEnumSoftware DecryptResponseProtectionLevelEnum = "SOFTWARE"
DecryptResponseProtectionLevelEnumHsm DecryptResponseProtectionLevelEnum = "HSM"
DecryptResponseProtectionLevelEnumExternal DecryptResponseProtectionLevelEnum = "EXTERNAL"
DecryptResponseProtectionLevelEnumExternalVpc DecryptResponseProtectionLevelEnum = "EXTERNAL_VPC"
)


type DecryptResponse struct {
    Plaintext *string `json:"plaintext,omitempty"`
    PlaintextCrc32c *string `json:"plaintextCrc32c,omitempty"`
    ProtectionLevel *DecryptResponseProtectionLevelEnum `json:"protectionLevel,omitempty"`
    UsedPrimary *bool `json:"usedPrimary,omitempty"`
    
}

