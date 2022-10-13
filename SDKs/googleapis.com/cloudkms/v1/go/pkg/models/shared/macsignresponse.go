package shared

type MacSignResponseProtectionLevelEnum string

const (
	MacSignResponseProtectionLevelEnumProtectionLevelUnspecified MacSignResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	MacSignResponseProtectionLevelEnumSoftware                   MacSignResponseProtectionLevelEnum = "SOFTWARE"
	MacSignResponseProtectionLevelEnumHsm                        MacSignResponseProtectionLevelEnum = "HSM"
	MacSignResponseProtectionLevelEnumExternal                   MacSignResponseProtectionLevelEnum = "EXTERNAL"
	MacSignResponseProtectionLevelEnumExternalVpc                MacSignResponseProtectionLevelEnum = "EXTERNAL_VPC"
)

type MacSignResponse struct {
	Mac                *string                             `json:"mac"`
	MacCrc32c          *string                             `json:"macCrc32c"`
	Name               *string                             `json:"name"`
	ProtectionLevel    *MacSignResponseProtectionLevelEnum `json:"protectionLevel"`
	VerifiedDataCrc32c *bool                               `json:"verifiedDataCrc32c"`
}
