package shared

type GoogleCloudDatacatalogV1TagTemplateField struct {
	Description *string                            `json:"description"`
	DisplayName *string                            `json:"displayName"`
	IsRequired  *bool                              `json:"isRequired"`
	Name        *string                            `json:"name"`
	Order       *int32                             `json:"order"`
	Type        *GoogleCloudDatacatalogV1FieldType `json:"type"`
}
