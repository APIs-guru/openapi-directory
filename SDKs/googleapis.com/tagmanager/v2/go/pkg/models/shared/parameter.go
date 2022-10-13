package shared

type ParameterTypeEnum string

const (
	ParameterTypeEnumTypeUnspecified  ParameterTypeEnum = "typeUnspecified"
	ParameterTypeEnumTemplate         ParameterTypeEnum = "template"
	ParameterTypeEnumInteger          ParameterTypeEnum = "integer"
	ParameterTypeEnumBoolean          ParameterTypeEnum = "boolean"
	ParameterTypeEnumList             ParameterTypeEnum = "list"
	ParameterTypeEnumMap              ParameterTypeEnum = "map"
	ParameterTypeEnumTriggerReference ParameterTypeEnum = "triggerReference"
	ParameterTypeEnumTagReference     ParameterTypeEnum = "tagReference"
)

type Parameter struct {
	Key   *string            `json:"key"`
	List  []Parameter        `json:"list"`
	Map   []Parameter        `json:"map"`
	Type  *ParameterTypeEnum `json:"type"`
	Value *string            `json:"value"`
}
