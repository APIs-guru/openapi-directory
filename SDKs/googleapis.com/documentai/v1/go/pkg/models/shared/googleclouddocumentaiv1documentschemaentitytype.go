package shared

type GoogleCloudDocumentaiV1DocumentSchemaEntityType struct {
	BaseTypes          []string                                                   `json:"baseTypes,omitempty"`
	DisplayName        *string                                                    `json:"displayName,omitempty"`
	EntityTypeMetadata *GoogleCloudDocumentaiV1EntityTypeMetadata                 `json:"entityTypeMetadata,omitempty"`
	EnumValues         *GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues `json:"enumValues,omitempty"`
	Name               *string                                                    `json:"name,omitempty"`
	Properties         []GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty  `json:"properties,omitempty"`
}
