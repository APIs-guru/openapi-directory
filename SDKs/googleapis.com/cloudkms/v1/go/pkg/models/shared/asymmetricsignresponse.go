package shared

type AsymmetricSignResponseProtectionLevelEnum string

const (
	AsymmetricSignResponseProtectionLevelEnumProtectionLevelUnspecified AsymmetricSignResponseProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	AsymmetricSignResponseProtectionLevelEnumSoftware                   AsymmetricSignResponseProtectionLevelEnum = "SOFTWARE"
	AsymmetricSignResponseProtectionLevelEnumHsm                        AsymmetricSignResponseProtectionLevelEnum = "HSM"
	AsymmetricSignResponseProtectionLevelEnumExternal                   AsymmetricSignResponseProtectionLevelEnum = "EXTERNAL"
	AsymmetricSignResponseProtectionLevelEnumExternalVpc                AsymmetricSignResponseProtectionLevelEnum = "EXTERNAL_VPC"
)

type AsymmetricSignResponse struct {
	Name                 *string                                    `json:"name"`
	ProtectionLevel      *AsymmetricSignResponseProtectionLevelEnum `json:"protectionLevel"`
	Signature            *string                                    `json:"signature"`
	SignatureCrc32c      *string                                    `json:"signatureCrc32c"`
	VerifiedDataCrc32c   *bool                                      `json:"verifiedDataCrc32c"`
	VerifiedDigestCrc32c *bool                                      `json:"verifiedDigestCrc32c"`
}
