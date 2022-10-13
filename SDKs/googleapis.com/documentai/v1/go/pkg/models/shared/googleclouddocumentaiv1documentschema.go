package shared

type GoogleCloudDocumentaiV1DocumentSchema struct {
	Description *string                                           `json:"description"`
	DisplayName *string                                           `json:"displayName"`
	EntityTypes []GoogleCloudDocumentaiV1DocumentSchemaEntityType `json:"entityTypes"`
	Metadata    *GoogleCloudDocumentaiV1DocumentSchemaMetadata    `json:"metadata"`
}
