package shared

type MacVerifyResponseProtectionLevelEnum string

const (
	MacVerifyResponseProtectionLevelEnumProtectionLevelUnspecified MacVerifyResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	MacVerifyResponseProtectionLevelEnumSoftware                   MacVerifyResponseProtectionLevelEnum = "SOFTWARE"
	MacVerifyResponseProtectionLevelEnumHsm                        MacVerifyResponseProtectionLevelEnum = "HSM"
	MacVerifyResponseProtectionLevelEnumExternal                   MacVerifyResponseProtectionLevelEnum = "EXTERNAL"
	MacVerifyResponseProtectionLevelEnumExternalVpc                MacVerifyResponseProtectionLevelEnum = "EXTERNAL_VPC"
)

type MacVerifyResponse struct {
	Name                     *string                               `json:"name"`
	ProtectionLevel          *MacVerifyResponseProtectionLevelEnum `json:"protectionLevel"`
	Success                  *bool                                 `json:"success"`
	VerifiedDataCrc32c       *bool                                 `json:"verifiedDataCrc32c"`
	VerifiedMacCrc32c        *bool                                 `json:"verifiedMacCrc32c"`
	VerifiedSuccessIntegrity *bool                                 `json:"verifiedSuccessIntegrity"`
}
