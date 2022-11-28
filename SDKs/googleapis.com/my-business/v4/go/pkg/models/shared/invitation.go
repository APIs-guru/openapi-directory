package shared

type InvitationRoleEnum string

const (
	InvitationRoleEnumAdminRoleUnspecified InvitationRoleEnum = "ADMIN_ROLE_UNSPECIFIED"
	InvitationRoleEnumOwner                InvitationRoleEnum = "OWNER"
	InvitationRoleEnumCoOwner              InvitationRoleEnum = "CO_OWNER"
	InvitationRoleEnumManager              InvitationRoleEnum = "MANAGER"
	InvitationRoleEnumCommunityManager     InvitationRoleEnum = "COMMUNITY_MANAGER"
)

// Invitation
// Output only. Represents a pending invitation.
type Invitation struct {
	Name           *string             `json:"name,omitempty"`
	Role           *InvitationRoleEnum `json:"role,omitempty"`
	TargetAccount  *Account            `json:"targetAccount,omitempty"`
	TargetLocation *TargetLocation     `json:"targetLocation,omitempty"`
}
