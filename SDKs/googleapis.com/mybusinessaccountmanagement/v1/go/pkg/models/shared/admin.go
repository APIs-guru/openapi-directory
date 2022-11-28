package shared

type AdminRoleEnum string

const (
	AdminRoleEnumAdminRoleUnspecified AdminRoleEnum = "ADMIN_ROLE_UNSPECIFIED"
	AdminRoleEnumPrimaryOwner         AdminRoleEnum = "PRIMARY_OWNER"
	AdminRoleEnumOwner                AdminRoleEnum = "OWNER"
	AdminRoleEnumManager              AdminRoleEnum = "MANAGER"
	AdminRoleEnumSiteManager          AdminRoleEnum = "SITE_MANAGER"
)

// AdminInput
// An administrator of an Account or a location.
type AdminInput struct {
	Account *string        `json:"account,omitempty"`
	Admin   *string        `json:"admin,omitempty"`
	Name    *string        `json:"name,omitempty"`
	Role    *AdminRoleEnum `json:"role,omitempty"`
}

// Admin
// An administrator of an Account or a location.
type Admin struct {
	Account           *string        `json:"account,omitempty"`
	Admin             *string        `json:"admin,omitempty"`
	Name              *string        `json:"name,omitempty"`
	PendingInvitation *bool          `json:"pendingInvitation,omitempty"`
	Role              *AdminRoleEnum `json:"role,omitempty"`
}
