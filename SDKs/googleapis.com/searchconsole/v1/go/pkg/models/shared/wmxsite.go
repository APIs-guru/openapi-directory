package shared

type WmxSitePermissionLevelEnum string

const (
	WmxSitePermissionLevelEnumSitePermissionLevelUnspecified WmxSitePermissionLevelEnum = "SITE_PERMISSION_LEVEL_UNSPECIFIED"
	WmxSitePermissionLevelEnumSiteOwner                      WmxSitePermissionLevelEnum = "SITE_OWNER"
	WmxSitePermissionLevelEnumSiteFullUser                   WmxSitePermissionLevelEnum = "SITE_FULL_USER"
	WmxSitePermissionLevelEnumSiteRestrictedUser             WmxSitePermissionLevelEnum = "SITE_RESTRICTED_USER"
	WmxSitePermissionLevelEnumSiteUnverifiedUser             WmxSitePermissionLevelEnum = "SITE_UNVERIFIED_USER"
)

type WmxSite struct {
	PermissionLevel *WmxSitePermissionLevelEnum `json:"permissionLevel,omitempty"`
	SiteURL         *string                     `json:"siteUrl,omitempty"`
}
