package shared




type MatterPermissionRoleEnum string

const (
    MatterPermissionRoleEnumRoleUnspecified MatterPermissionRoleEnum = "ROLE_UNSPECIFIED"
MatterPermissionRoleEnumCollaborator MatterPermissionRoleEnum = "COLLABORATOR"
MatterPermissionRoleEnumOwner MatterPermissionRoleEnum = "OWNER"
)


type MatterPermission struct {
    AccountID *string `json:"accountId,omitempty"`
    Role *MatterPermissionRoleEnum `json:"role,omitempty"`
    
}

