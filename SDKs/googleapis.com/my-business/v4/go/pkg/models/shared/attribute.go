package shared

type AttributeValueTypeEnum string

const (
	AttributeValueTypeEnumAttributeValueTypeUnspecified AttributeValueTypeEnum = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
	AttributeValueTypeEnumBool                          AttributeValueTypeEnum = "BOOL"
	AttributeValueTypeEnumEnum                          AttributeValueTypeEnum = "ENUM"
	AttributeValueTypeEnumURL                           AttributeValueTypeEnum = "URL"
	AttributeValueTypeEnumRepeatedEnum                  AttributeValueTypeEnum = "REPEATED_ENUM"
)

// Attribute
// A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
type Attribute struct {
	AttributeID       *string                     `json:"attributeId,omitempty"`
	RepeatedEnumValue *RepeatedEnumAttributeValue `json:"repeatedEnumValue,omitempty"`
	URLValues         []URLAttributeValue         `json:"urlValues,omitempty"`
	ValueType         *AttributeValueTypeEnum     `json:"valueType,omitempty"`
	Values            []interface{}               `json:"values,omitempty"`
}
