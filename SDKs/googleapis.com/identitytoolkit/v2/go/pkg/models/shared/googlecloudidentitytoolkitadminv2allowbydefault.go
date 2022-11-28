package shared

// GoogleCloudIdentitytoolkitAdminV2AllowByDefault
// Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
type GoogleCloudIdentitytoolkitAdminV2AllowByDefault struct {
	DisallowedRegions []string `json:"disallowedRegions,omitempty"`
}
