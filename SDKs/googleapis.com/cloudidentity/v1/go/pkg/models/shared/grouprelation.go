package shared

type GroupRelationRelationTypeEnum string

const (
	GroupRelationRelationTypeEnumRelationTypeUnspecified GroupRelationRelationTypeEnum = "RELATION_TYPE_UNSPECIFIED"
	GroupRelationRelationTypeEnumDirect                  GroupRelationRelationTypeEnum = "DIRECT"
	GroupRelationRelationTypeEnumIndirect                GroupRelationRelationTypeEnum = "INDIRECT"
	GroupRelationRelationTypeEnumDirectAndIndirect       GroupRelationRelationTypeEnum = "DIRECT_AND_INDIRECT"
)

type GroupRelation struct {
	DisplayName  *string                        `json:"displayName"`
	Group        *string                        `json:"group"`
	GroupKey     *EntityKey                     `json:"groupKey"`
	Labels       map[string]string              `json:"labels"`
	RelationType *GroupRelationRelationTypeEnum `json:"relationType"`
	Roles        []TransitiveMembershipRole     `json:"roles"`
}
