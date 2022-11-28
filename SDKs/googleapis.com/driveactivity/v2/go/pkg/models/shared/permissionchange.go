package shared

// PermissionChange
// A change of the permission setting on an item.
type PermissionChange struct {
	AddedPermissions   []Permission `json:"addedPermissions,omitempty"`
	RemovedPermissions []Permission `json:"removedPermissions,omitempty"`
}
