package shared

type MembershipTypeEnum string

const (
	MembershipTypeEnumTypeUnspecified MembershipTypeEnum = "TYPE_UNSPECIFIED"
	MembershipTypeEnumUser            MembershipTypeEnum = "USER"
	MembershipTypeEnumServiceAccount  MembershipTypeEnum = "SERVICE_ACCOUNT"
	MembershipTypeEnumGroup           MembershipTypeEnum = "GROUP"
	MembershipTypeEnumSharedDrive     MembershipTypeEnum = "SHARED_DRIVE"
	MembershipTypeEnumOther           MembershipTypeEnum = "OTHER"
)

type Membership struct {
	CreateTime         *string             `json:"createTime"`
	MemberKey          *EntityKey          `json:"memberKey"`
	Name               *string             `json:"name"`
	PreferredMemberKey *EntityKey          `json:"preferredMemberKey"`
	Roles              []MembershipRole    `json:"roles"`
	Type               *MembershipTypeEnum `json:"type"`
	UpdateTime         *string             `json:"updateTime"`
}
