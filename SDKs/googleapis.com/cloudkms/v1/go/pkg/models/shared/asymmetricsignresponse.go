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
	Name                 *string                                    `json:"name,omitempty"`
	ProtectionLevel      *AsymmetricSignResponseProtectionLevelEnum `json:"protectionLevel,omitempty"`
	Signature            *string                                    `json:"signature,omitempty"`
	SignatureCrc32c      *string                                    `json:"signatureCrc32c,omitempty"`
	VerifiedDataCrc32c   *bool                                      `json:"verifiedDataCrc32c,omitempty"`
	VerifiedDigestCrc32c *bool                                      `json:"verifiedDigestCrc32c,omitempty"`
}
