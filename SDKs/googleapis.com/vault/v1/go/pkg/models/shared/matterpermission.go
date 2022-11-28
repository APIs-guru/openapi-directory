package shared

type MatterPermissionRoleEnum string

const (
	MatterPermissionRoleEnumRoleUnspecified MatterPermissionRoleEnum = "ROLE_UNSPECIFIED"
	MatterPermissionRoleEnumCollaborator    MatterPermissionRoleEnum = "COLLABORATOR"
	MatterPermissionRoleEnumOwner           MatterPermissionRoleEnum = "OWNER"
)

// MatterPermission
// Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
type MatterPermission struct {
	AccountID *string                   `json:"accountId,omitempty"`
	Role      *MatterPermissionRoleEnum `json:"role,omitempty"`
}
