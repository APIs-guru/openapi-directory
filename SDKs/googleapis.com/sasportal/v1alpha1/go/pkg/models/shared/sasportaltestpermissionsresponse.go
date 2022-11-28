package shared

// SasPortalTestPermissionsResponse
// Response message for `TestPermissions` method.
type SasPortalTestPermissionsResponse struct {
	Permissions []string `json:"permissions,omitempty"`
}
