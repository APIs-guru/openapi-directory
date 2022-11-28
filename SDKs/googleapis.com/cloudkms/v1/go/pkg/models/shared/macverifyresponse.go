package shared

type MacVerifyResponseProtectionLevelEnum string

const (
	MacVerifyResponseProtectionLevelEnumProtectionLevelUnspecified MacVerifyResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	MacVerifyResponseProtectionLevelEnumSoftware                   MacVerifyResponseProtectionLevelEnum = "SOFTWARE"
	MacVerifyResponseProtectionLevelEnumHsm                        MacVerifyResponseProtectionLevelEnum = "HSM"
	MacVerifyResponseProtectionLevelEnumExternal                   MacVerifyResponseProtectionLevelEnum = "EXTERNAL"
	MacVerifyResponseProtectionLevelEnumExternalVpc                MacVerifyResponseProtectionLevelEnum = "EXTERNAL_VPC"
)

// MacVerifyResponse
// Response message for KeyManagementService.MacVerify.
type MacVerifyResponse struct {
	Name                     *string                               `json:"name,omitempty"`
	ProtectionLevel          *MacVerifyResponseProtectionLevelEnum `json:"protectionLevel,omitempty"`
	Success                  *bool                                 `json:"success,omitempty"`
	VerifiedDataCrc32c       *bool                                 `json:"verifiedDataCrc32c,omitempty"`
	VerifiedMacCrc32c        *bool                                 `json:"verifiedMacCrc32c,omitempty"`
	VerifiedSuccessIntegrity *bool                                 `json:"verifiedSuccessIntegrity,omitempty"`
}
