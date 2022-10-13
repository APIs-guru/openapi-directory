package shared

type AttributeDefinitionCategoryEnum string

const (
	AttributeDefinitionCategoryEnumCategoryUnspecified AttributeDefinitionCategoryEnum = "CATEGORY_UNSPECIFIED"
	AttributeDefinitionCategoryEnumResource            AttributeDefinitionCategoryEnum = "RESOURCE"
	AttributeDefinitionCategoryEnumRequest             AttributeDefinitionCategoryEnum = "REQUEST"
)

type AttributeDefinition struct {
	AllowedValues           []string                         `json:"allowedValues"`
	Category                *AttributeDefinitionCategoryEnum `json:"category"`
	ConsentDefaultValues    []string                         `json:"consentDefaultValues"`
	DataMappingDefaultValue *string                          `json:"dataMappingDefaultValue"`
	Description             *string                          `json:"description"`
	Name                    *string                          `json:"name"`
}
