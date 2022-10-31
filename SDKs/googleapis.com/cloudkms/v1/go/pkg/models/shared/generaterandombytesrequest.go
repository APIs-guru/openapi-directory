package shared




type GenerateRandomBytesRequestProtectionLevelEnum string

const (
    GenerateRandomBytesRequestProtectionLevelEnumProtectionLevelUnspecified GenerateRandomBytesRequestProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
GenerateRandomBytesRequestProtectionLevelEnumSoftware GenerateRandomBytesRequestProtectionLevelEnum = "SOFTWARE"
GenerateRandomBytesRequestProtectionLevelEnumHsm GenerateRandomBytesRequestProtectionLevelEnum = "HSM"
GenerateRandomBytesRequestProtectionLevelEnumExternal GenerateRandomBytesRequestProtectionLevelEnum = "EXTERNAL"
GenerateRandomBytesRequestProtectionLevelEnumExternalVpc GenerateRandomBytesRequestProtectionLevelEnum = "EXTERNAL_VPC"
)


type GenerateRandomBytesRequest struct {
    LengthBytes *int32 `json:"lengthBytes,omitempty"`
    ProtectionLevel *GenerateRandomBytesRequestProtectionLevelEnum `json:"protectionLevel,omitempty"`
    
}

