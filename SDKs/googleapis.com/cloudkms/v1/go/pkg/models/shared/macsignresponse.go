package shared

type MacSignResponseProtectionLevelEnum string

const (
	MacSignResponseProtectionLevelEnumProtectionLevelUnspecified MacSignResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	MacSignResponseProtectionLevelEnumSoftware                   MacSignResponseProtectionLevelEnum = "SOFTWARE"
	MacSignResponseProtectionLevelEnumHsm                        MacSignResponseProtectionLevelEnum = "HSM"
	MacSignResponseProtectionLevelEnumExternal                   MacSignResponseProtectionLevelEnum = "EXTERNAL"
	MacSignResponseProtectionLevelEnumExternalVpc                MacSignResponseProtectionLevelEnum = "EXTERNAL_VPC"
)

// MacSignResponse
// Response message for KeyManagementService.MacSign.
type MacSignResponse struct {
	Mac                *string                             `json:"mac,omitempty"`
	MacCrc32c          *string                             `json:"macCrc32c,omitempty"`
	Name               *string                             `json:"name,omitempty"`
	ProtectionLevel    *MacSignResponseProtectionLevelEnum `json:"protectionLevel,omitempty"`
	VerifiedDataCrc32c *bool                               `json:"verifiedDataCrc32c,omitempty"`
}
