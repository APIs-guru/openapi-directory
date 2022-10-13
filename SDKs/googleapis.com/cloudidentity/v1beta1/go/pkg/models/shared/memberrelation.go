package shared

type MemberRelationRelationTypeEnum string

const (
	MemberRelationRelationTypeEnumRelationTypeUnspecified MemberRelationRelationTypeEnum = "RELATION_TYPE_UNSPECIFIED"
	MemberRelationRelationTypeEnumDirect                  MemberRelationRelationTypeEnum = "DIRECT"
	MemberRelationRelationTypeEnumIndirect                MemberRelationRelationTypeEnum = "INDIRECT"
	MemberRelationRelationTypeEnumDirectAndIndirect       MemberRelationRelationTypeEnum = "DIRECT_AND_INDIRECT"
)

type MemberRelation struct {
	Member             *string                         `json:"member"`
	PreferredMemberKey []EntityKey                     `json:"preferredMemberKey"`
	RelationType       *MemberRelationRelationTypeEnum `json:"relationType"`
	Roles              []TransitiveMembershipRole      `json:"roles"`
}
