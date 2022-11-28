package shared

type RelevantLocationRelationTypeEnum string

const (
	RelevantLocationRelationTypeEnumRelationTypeUnspecified    RelevantLocationRelationTypeEnum = "RELATION_TYPE_UNSPECIFIED"
	RelevantLocationRelationTypeEnumDepartmentOf               RelevantLocationRelationTypeEnum = "DEPARTMENT_OF"
	RelevantLocationRelationTypeEnumIndependentEstablishmentIn RelevantLocationRelationTypeEnum = "INDEPENDENT_ESTABLISHMENT_IN"
)

// RelevantLocation
// Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
type RelevantLocation struct {
	PlaceID      *string                           `json:"placeId,omitempty"`
	RelationType *RelevantLocationRelationTypeEnum `json:"relationType,omitempty"`
}
