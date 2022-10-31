package shared



type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType struct {
    BaseTypes []string `json:"baseTypes,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EntityTypeMetadata *GoogleCloudDocumentaiV1beta3EntityTypeMetadata `json:"entityTypeMetadata,omitempty"`
    EnumValues *GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues `json:"enumValues,omitempty"`
    Name *string `json:"name,omitempty"`
    Properties []GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty `json:"properties,omitempty"`
    
}

