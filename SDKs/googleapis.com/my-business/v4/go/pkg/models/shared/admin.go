package shared

type AdminRoleEnum string

const (
	AdminRoleEnumAdminRoleUnspecified AdminRoleEnum = "ADMIN_ROLE_UNSPECIFIED"
	AdminRoleEnumOwner                AdminRoleEnum = "OWNER"
	AdminRoleEnumCoOwner              AdminRoleEnum = "CO_OWNER"
	AdminRoleEnumManager              AdminRoleEnum = "MANAGER"
	AdminRoleEnumCommunityManager     AdminRoleEnum = "COMMUNITY_MANAGER"
)

type Admin struct {
	AdminName         *string        `json:"adminName,omitempty"`
	Name              *string        `json:"name,omitempty"`
	PendingInvitation *bool          `json:"pendingInvitation,omitempty"`
	Role              *AdminRoleEnum `json:"role,omitempty"`
}
