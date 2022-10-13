package shared

type AttributeMetadataValueTypeEnum string

const (
	AttributeMetadataValueTypeEnumAttributeValueTypeUnspecified AttributeMetadataValueTypeEnum = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
	AttributeMetadataValueTypeEnumBool                          AttributeMetadataValueTypeEnum = "BOOL"
	AttributeMetadataValueTypeEnumEnum                          AttributeMetadataValueTypeEnum = "ENUM"
	AttributeMetadataValueTypeEnumURL                           AttributeMetadataValueTypeEnum = "URL"
	AttributeMetadataValueTypeEnumRepeatedEnum                  AttributeMetadataValueTypeEnum = "REPEATED_ENUM"
)

type AttributeMetadata struct {
	AttributeID      *string                         `json:"attributeId"`
	DisplayName      *string                         `json:"displayName"`
	GroupDisplayName *string                         `json:"groupDisplayName"`
	IsDeprecated     *bool                           `json:"isDeprecated"`
	IsRepeatable     *bool                           `json:"isRepeatable"`
	ValueMetadata    []AttributeValueMetadata        `json:"valueMetadata"`
	ValueType        *AttributeMetadataValueTypeEnum `json:"valueType"`
}
