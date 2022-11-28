package shared

type AttributeDefinitionCategoryEnum string

const (
	AttributeDefinitionCategoryEnumCategoryUnspecified AttributeDefinitionCategoryEnum = "CATEGORY_UNSPECIFIED"
	AttributeDefinitionCategoryEnumResource            AttributeDefinitionCategoryEnum = "RESOURCE"
	AttributeDefinitionCategoryEnumRequest             AttributeDefinitionCategoryEnum = "REQUEST"
)

// AttributeDefinition
// A client-defined consent attribute.
type AttributeDefinition struct {
	AllowedValues           []string                         `json:"allowedValues,omitempty"`
	Category                *AttributeDefinitionCategoryEnum `json:"category,omitempty"`
	ConsentDefaultValues    []string                         `json:"consentDefaultValues,omitempty"`
	DataMappingDefaultValue *string                          `json:"dataMappingDefaultValue,omitempty"`
	Description             *string                          `json:"description,omitempty"`
	Name                    *string                          `json:"name,omitempty"`
}
