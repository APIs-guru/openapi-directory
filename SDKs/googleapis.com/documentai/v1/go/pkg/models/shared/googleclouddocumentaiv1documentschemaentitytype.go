package shared

type GoogleCloudDocumentaiV1DocumentSchemaEntityType struct {
	BaseTypes          []string                                                   `json:"baseTypes"`
	DisplayName        *string                                                    `json:"displayName"`
	EntityTypeMetadata *GoogleCloudDocumentaiV1EntityTypeMetadata                 `json:"entityTypeMetadata"`
	EnumValues         *GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues `json:"enumValues"`
	Name               *string                                                    `json:"name"`
	Properties         []GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty  `json:"properties"`
}
