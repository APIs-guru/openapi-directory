package shared

type InputFieldDefinitionSupportedValueTypesEnum string

const (
	InputFieldDefinitionSupportedValueTypesEnumStaticValue    InputFieldDefinitionSupportedValueTypesEnum = "STATIC_VALUE"
	InputFieldDefinitionSupportedValueTypesEnumObjectProperty InputFieldDefinitionSupportedValueTypesEnum = "OBJECT_PROPERTY"
	InputFieldDefinitionSupportedValueTypesEnumFieldData      InputFieldDefinitionSupportedValueTypesEnum = "FIELD_DATA"
)

// InputFieldDefinition
// Configuration for an input field on the custom action
type InputFieldDefinition struct {
	IsRequired          bool                                          `json:"isRequired"`
	SupportedValueTypes []InputFieldDefinitionSupportedValueTypesEnum `json:"supportedValueTypes,omitempty"`
	TypeDefinition      FieldTypeDefinition                           `json:"typeDefinition"`
}
