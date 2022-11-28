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

// Parameter
// Represents a Google Tag Manager Parameter.
type Parameter struct {
	Key   *string            `json:"key,omitempty"`
	List  []Parameter        `json:"list,omitempty"`
	Map   []Parameter        `json:"map,omitempty"`
	Type  *ParameterTypeEnum `json:"type,omitempty"`
	Value *string            `json:"value,omitempty"`
}
