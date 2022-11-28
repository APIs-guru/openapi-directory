package shared

// WmxSite
// Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
type WmxSite struct {
	PermissionLevel *string `json:"permissionLevel,omitempty"`
	SiteURL         *string `json:"siteUrl,omitempty"`
}
