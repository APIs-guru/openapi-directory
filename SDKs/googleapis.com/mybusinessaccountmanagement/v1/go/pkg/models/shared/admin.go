package shared

type AdminRoleEnum string

const (
	AdminRoleEnumAdminRoleUnspecified AdminRoleEnum = "ADMIN_ROLE_UNSPECIFIED"
	AdminRoleEnumPrimaryOwner         AdminRoleEnum = "PRIMARY_OWNER"
	AdminRoleEnumOwner                AdminRoleEnum = "OWNER"
	AdminRoleEnumManager              AdminRoleEnum = "MANAGER"
	AdminRoleEnumSiteManager          AdminRoleEnum = "SITE_MANAGER"
)

type Admin struct {
	Account           *string        `json:"account,omitempty"`
	Admin             *string        `json:"admin,omitempty"`
	Name              *string        `json:"name,omitempty"`
	PendingInvitation *bool          `json:"pendingInvitation,omitempty"`
	Role              *AdminRoleEnum `json:"role,omitempty"`
}
