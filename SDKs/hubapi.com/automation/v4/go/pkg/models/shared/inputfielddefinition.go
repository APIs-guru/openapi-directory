package shared




type InputFieldDefinitionSupportedValueTypesEnum string

const (
    InputFieldDefinitionSupportedValueTypesEnumStaticValue InputFieldDefinitionSupportedValueTypesEnum = "STATIC_VALUE"
InputFieldDefinitionSupportedValueTypesEnumObjectProperty InputFieldDefinitionSupportedValueTypesEnum = "OBJECT_PROPERTY"
InputFieldDefinitionSupportedValueTypesEnumFieldData InputFieldDefinitionSupportedValueTypesEnum = "FIELD_DATA"
)


type InputFieldDefinition struct {
    IsRequired bool `json:"isRequired"`
    SupportedValueTypes []InputFieldDefinitionSupportedValueTypesEnum `json:"supportedValueTypes,omitempty"`
    TypeDefinition FieldTypeDefinition `json:"typeDefinition"`
    
}

