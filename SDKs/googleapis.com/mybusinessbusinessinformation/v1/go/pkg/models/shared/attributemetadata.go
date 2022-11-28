package shared

type AttributeMetadataValueTypeEnum string

const (
	AttributeMetadataValueTypeEnumAttributeValueTypeUnspecified AttributeMetadataValueTypeEnum = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
	AttributeMetadataValueTypeEnumBool                          AttributeMetadataValueTypeEnum = "BOOL"
	AttributeMetadataValueTypeEnumEnum                          AttributeMetadataValueTypeEnum = "ENUM"
	AttributeMetadataValueTypeEnumURL                           AttributeMetadataValueTypeEnum = "URL"
	AttributeMetadataValueTypeEnumRepeatedEnum                  AttributeMetadataValueTypeEnum = "REPEATED_ENUM"
)

// AttributeMetadata
// Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
type AttributeMetadata struct {
	Deprecated       *bool                           `json:"deprecated,omitempty"`
	DisplayName      *string                         `json:"displayName,omitempty"`
	GroupDisplayName *string                         `json:"groupDisplayName,omitempty"`
	Parent           *string                         `json:"parent,omitempty"`
	Repeatable       *bool                           `json:"repeatable,omitempty"`
	ValueMetadata    []AttributeValueMetadata        `json:"valueMetadata,omitempty"`
	ValueType        *AttributeMetadataValueTypeEnum `json:"valueType,omitempty"`
}
