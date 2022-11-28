package shared

// GoogleCloudIdentitytoolkitAdminV2AllowlistOnly
// Defines a policy of only allowing regions by explicitly adding them to an allowlist.
type GoogleCloudIdentitytoolkitAdminV2AllowlistOnly struct {
	AllowedRegions []string `json:"allowedRegions,omitempty"`
}
