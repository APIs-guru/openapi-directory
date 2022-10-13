package shared

type AttributeValueTypeEnum string

const (
	AttributeValueTypeEnumAttributeValueTypeUnspecified AttributeValueTypeEnum = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
	AttributeValueTypeEnumBool                          AttributeValueTypeEnum = "BOOL"
	AttributeValueTypeEnumEnum                          AttributeValueTypeEnum = "ENUM"
	AttributeValueTypeEnumURL                           AttributeValueTypeEnum = "URL"
	AttributeValueTypeEnumRepeatedEnum                  AttributeValueTypeEnum = "REPEATED_ENUM"
)

type Attribute struct {
	AttributeID       *string                     `json:"attributeId"`
	RepeatedEnumValue *RepeatedEnumAttributeValue `json:"repeatedEnumValue"`
	URLValues         []URLAttributeValue         `json:"urlValues"`
	ValueType         *AttributeValueTypeEnum     `json:"valueType"`
	Values            []interface{}               `json:"values"`
}
