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
	Account           *string        `json:"account"`
	Admin             *string        `json:"admin"`
	Name              *string        `json:"name"`
	PendingInvitation *bool          `json:"pendingInvitation"`
	Role              *AdminRoleEnum `json:"role"`
}
