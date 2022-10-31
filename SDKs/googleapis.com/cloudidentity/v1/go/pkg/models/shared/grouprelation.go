package shared

type GroupRelationRelationTypeEnum string

const (
	GroupRelationRelationTypeEnumRelationTypeUnspecified GroupRelationRelationTypeEnum = "RELATION_TYPE_UNSPECIFIED"
	GroupRelationRelationTypeEnumDirect                  GroupRelationRelationTypeEnum = "DIRECT"
	GroupRelationRelationTypeEnumIndirect                GroupRelationRelationTypeEnum = "INDIRECT"
	GroupRelationRelationTypeEnumDirectAndIndirect       GroupRelationRelationTypeEnum = "DIRECT_AND_INDIRECT"
)

type GroupRelation struct {
	DisplayName  *string                        `json:"displayName,omitempty"`
	Group        *string                        `json:"group,omitempty"`
	GroupKey     *EntityKey                     `json:"groupKey,omitempty"`
	Labels       map[string]string              `json:"labels,omitempty"`
	RelationType *GroupRelationRelationTypeEnum `json:"relationType,omitempty"`
	Roles        []TransitiveMembershipRole     `json:"roles,omitempty"`
}
