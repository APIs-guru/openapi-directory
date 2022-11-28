package shared

// PermissionList
// A list of permissions for a file.
type PermissionList struct {
	Kind          *string      `json:"kind,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Permissions   []Permission `json:"permissions,omitempty"`
}
