package shared

type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType struct {
	BaseTypes          []string                                                        `json:"baseTypes"`
	DisplayName        *string                                                         `json:"displayName"`
	EntityTypeMetadata *GoogleCloudDocumentaiV1beta3EntityTypeMetadata                 `json:"entityTypeMetadata"`
	EnumValues         *GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues `json:"enumValues"`
	Name               *string                                                         `json:"name"`
	Properties         []GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty  `json:"properties"`
}
