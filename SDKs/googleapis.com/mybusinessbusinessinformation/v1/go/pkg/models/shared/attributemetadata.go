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
	Deprecated       *bool                           `json:"deprecated"`
	DisplayName      *string                         `json:"displayName"`
	GroupDisplayName *string                         `json:"groupDisplayName"`
	Parent           *string                         `json:"parent"`
	Repeatable       *bool                           `json:"repeatable"`
	ValueMetadata    []AttributeValueMetadata        `json:"valueMetadata"`
	ValueType        *AttributeMetadataValueTypeEnum `json:"valueType"`
}
