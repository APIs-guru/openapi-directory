package shared

// AccountPermissionGroup
// AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
type AccountPermissionGroup struct {
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}
