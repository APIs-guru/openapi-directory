package shared




type AttributeValueTypeEnum string

const (
    AttributeValueTypeEnumAttributeValueTypeUnspecified AttributeValueTypeEnum = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
AttributeValueTypeEnumBool AttributeValueTypeEnum = "BOOL"
AttributeValueTypeEnumEnum AttributeValueTypeEnum = "ENUM"
AttributeValueTypeEnumURL AttributeValueTypeEnum = "URL"
AttributeValueTypeEnumRepeatedEnum AttributeValueTypeEnum = "REPEATED_ENUM"
)


type Attribute struct {
    Name *string `json:"name,omitempty"`
    RepeatedEnumValue *RepeatedEnumAttributeValue `json:"repeatedEnumValue,omitempty"`
    URIValues []URIAttributeValue `json:"uriValues,omitempty"`
    ValueType *AttributeValueTypeEnum `json:"valueType,omitempty"`
    Values []interface{} `json:"values,omitempty"`
    
}

