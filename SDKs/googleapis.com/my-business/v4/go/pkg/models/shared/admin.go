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
	AdminName         *string        `json:"adminName"`
	Name              *string        `json:"name"`
	PendingInvitation *bool          `json:"pendingInvitation"`
	Role              *AdminRoleEnum `json:"role"`
}
