package shared

type GoogleCloudDocumentaiV1beta3DocumentSchema struct {
	Description *string                                                `json:"description"`
	DisplayName *string                                                `json:"displayName"`
	EntityTypes []GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType `json:"entityTypes"`
	Metadata    *GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata    `json:"metadata"`
}
