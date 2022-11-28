package shared

// GoogleCloudDocumentaiV1beta3DocumentSchema
// The schema defines the output of the processed document by a processor.
type GoogleCloudDocumentaiV1beta3DocumentSchema struct {
	Description *string                                                `json:"description,omitempty"`
	DisplayName *string                                                `json:"displayName,omitempty"`
	EntityTypes []GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType `json:"entityTypes,omitempty"`
	Metadata    *GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata    `json:"metadata,omitempty"`
}
