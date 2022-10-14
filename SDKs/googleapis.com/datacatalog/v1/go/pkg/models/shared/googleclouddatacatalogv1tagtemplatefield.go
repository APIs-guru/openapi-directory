package shared

type GoogleCloudDatacatalogV1TagTemplateField struct {
	Description *string                            `json:"description,omitempty"`
	DisplayName *string                            `json:"displayName,omitempty"`
	IsRequired  *bool                              `json:"isRequired,omitempty"`
	Name        *string                            `json:"name,omitempty"`
	Order       *int32                             `json:"order,omitempty"`
	Type        *GoogleCloudDatacatalogV1FieldType `json:"type,omitempty"`
}
