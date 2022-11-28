package shared

// GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType
// EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType struct {
	BaseTypes   []string                                                        `json:"baseTypes,omitempty"`
	DisplayName *string                                                         `json:"displayName,omitempty"`
	EnumValues  *GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues `json:"enumValues,omitempty"`
	Name        *string                                                         `json:"name,omitempty"`
	Properties  []GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty  `json:"properties,omitempty"`
}
