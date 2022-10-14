package shared

type MemberRelationRelationTypeEnum string

const (
	MemberRelationRelationTypeEnumRelationTypeUnspecified MemberRelationRelationTypeEnum = "RELATION_TYPE_UNSPECIFIED"
	MemberRelationRelationTypeEnumDirect                  MemberRelationRelationTypeEnum = "DIRECT"
	MemberRelationRelationTypeEnumIndirect                MemberRelationRelationTypeEnum = "INDIRECT"
	MemberRelationRelationTypeEnumDirectAndIndirect       MemberRelationRelationTypeEnum = "DIRECT_AND_INDIRECT"
)

type MemberRelation struct {
	Member             *string                         `json:"member,omitempty"`
	PreferredMemberKey []EntityKey                     `json:"preferredMemberKey,omitempty"`
	RelationType       *MemberRelationRelationTypeEnum `json:"relationType,omitempty"`
	Roles              []TransitiveMembershipRole      `json:"roles,omitempty"`
}
