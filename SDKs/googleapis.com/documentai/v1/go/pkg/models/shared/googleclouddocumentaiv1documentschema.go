package shared

type GoogleCloudDocumentaiV1DocumentSchema struct {
	Description *string                                           `json:"description,omitempty"`
	DisplayName *string                                           `json:"displayName,omitempty"`
	EntityTypes []GoogleCloudDocumentaiV1DocumentSchemaEntityType `json:"entityTypes,omitempty"`
	Metadata    *GoogleCloudDocumentaiV1DocumentSchemaMetadata    `json:"metadata,omitempty"`
}
