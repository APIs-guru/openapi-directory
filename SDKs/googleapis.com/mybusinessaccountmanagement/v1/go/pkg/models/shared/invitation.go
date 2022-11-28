package shared

type InvitationRoleEnum string

const (
	InvitationRoleEnumAdminRoleUnspecified InvitationRoleEnum = "ADMIN_ROLE_UNSPECIFIED"
	InvitationRoleEnumPrimaryOwner         InvitationRoleEnum = "PRIMARY_OWNER"
	InvitationRoleEnumOwner                InvitationRoleEnum = "OWNER"
	InvitationRoleEnumManager              InvitationRoleEnum = "MANAGER"
	InvitationRoleEnumSiteManager          InvitationRoleEnum = "SITE_MANAGER"
)

type InvitationTargetTypeEnum string

const (
	InvitationTargetTypeEnumTargetTypeUnspecified InvitationTargetTypeEnum = "TARGET_TYPE_UNSPECIFIED"
	InvitationTargetTypeEnumAccountsOnly          InvitationTargetTypeEnum = "ACCOUNTS_ONLY"
	InvitationTargetTypeEnumLocationsOnly         InvitationTargetTypeEnum = "LOCATIONS_ONLY"
)

// Invitation
// Represents a pending invitation.
type Invitation struct {
	Name           *string                   `json:"name,omitempty"`
	Role           *InvitationRoleEnum       `json:"role,omitempty"`
	TargetAccount  *Account                  `json:"targetAccount,omitempty"`
	TargetLocation *TargetLocation           `json:"targetLocation,omitempty"`
	TargetType     *InvitationTargetTypeEnum `json:"targetType,omitempty"`
}
