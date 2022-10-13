package shared

type MembershipRoleEnum string

const (
	MembershipRoleEnumMembershipRoleUnspecified MembershipRoleEnum = "MEMBERSHIP_ROLE_UNSPECIFIED"
	MembershipRoleEnumRoleMember                MembershipRoleEnum = "ROLE_MEMBER"
	MembershipRoleEnumRoleManager               MembershipRoleEnum = "ROLE_MANAGER"
)

type MembershipStateEnum string

const (
	MembershipStateEnumMembershipStateUnspecified MembershipStateEnum = "MEMBERSHIP_STATE_UNSPECIFIED"
	MembershipStateEnumJoined                     MembershipStateEnum = "JOINED"
	MembershipStateEnumInvited                    MembershipStateEnum = "INVITED"
	MembershipStateEnumNotAMember                 MembershipStateEnum = "NOT_A_MEMBER"
)

type Membership struct {
	CreateTime *string              `json:"createTime"`
	Member     *User                `json:"member"`
	Name       *string              `json:"name"`
	Role       *MembershipRoleEnum  `json:"role"`
	State      *MembershipStateEnum `json:"state"`
}
