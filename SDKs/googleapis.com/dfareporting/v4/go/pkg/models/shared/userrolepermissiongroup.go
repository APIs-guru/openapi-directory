package shared

// UserRolePermissionGroup
// Represents a grouping of related user role permissions.
type UserRolePermissionGroup struct {
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}
