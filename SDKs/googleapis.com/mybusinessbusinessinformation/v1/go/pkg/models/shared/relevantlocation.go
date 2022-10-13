package shared

type RelevantLocationRelationTypeEnum string

const (
	RelevantLocationRelationTypeEnumRelationTypeUnspecified    RelevantLocationRelationTypeEnum = "RELATION_TYPE_UNSPECIFIED"
	RelevantLocationRelationTypeEnumDepartmentOf               RelevantLocationRelationTypeEnum = "DEPARTMENT_OF"
	RelevantLocationRelationTypeEnumIndependentEstablishmentIn RelevantLocationRelationTypeEnum = "INDEPENDENT_ESTABLISHMENT_IN"
)

type RelevantLocation struct {
	PlaceID      *string                           `json:"placeId"`
	RelationType *RelevantLocationRelationTypeEnum `json:"relationType"`
}
