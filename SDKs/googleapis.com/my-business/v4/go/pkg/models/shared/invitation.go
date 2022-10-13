package shared

type InvitationRoleEnum string

const (
	InvitationRoleEnumAdminRoleUnspecified InvitationRoleEnum = "ADMIN_ROLE_UNSPECIFIED"
	InvitationRoleEnumOwner                InvitationRoleEnum = "OWNER"
	InvitationRoleEnumCoOwner              InvitationRoleEnum = "CO_OWNER"
	InvitationRoleEnumManager              InvitationRoleEnum = "MANAGER"
	InvitationRoleEnumCommunityManager     InvitationRoleEnum = "COMMUNITY_MANAGER"
)

type Invitation struct {
	Name           *string             `json:"name"`
	Role           *InvitationRoleEnum `json:"role"`
	TargetAccount  *Account            `json:"targetAccount"`
	TargetLocation *TargetLocation     `json:"targetLocation"`
}
