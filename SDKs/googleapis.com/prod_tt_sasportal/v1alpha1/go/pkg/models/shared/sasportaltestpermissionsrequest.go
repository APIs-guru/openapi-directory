package shared

// SasPortalTestPermissionsRequest
// Request message for `TestPermissions` method.
type SasPortalTestPermissionsRequest struct {
	Permissions []string `json:"permissions,omitempty"`
	Resource    *string  `json:"resource,omitempty"`
}
