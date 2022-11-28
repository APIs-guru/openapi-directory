package shared

// GoogleCloudDatacatalogV1TagTemplateFieldInput
// The template for an individual field within a tag template.
type GoogleCloudDatacatalogV1TagTemplateFieldInput struct {
	Description *string                            `json:"description,omitempty"`
	DisplayName *string                            `json:"displayName,omitempty"`
	IsRequired  *bool                              `json:"isRequired,omitempty"`
	Order       *int32                             `json:"order,omitempty"`
	Type        *GoogleCloudDatacatalogV1FieldType `json:"type,omitempty"`
}

// GoogleCloudDatacatalogV1TagTemplateField
// The template for an individual field within a tag template.
type GoogleCloudDatacatalogV1TagTemplateField struct {
	Description *string                            `json:"description,omitempty"`
	DisplayName *string                            `json:"displayName,omitempty"`
	IsRequired  *bool                              `json:"isRequired,omitempty"`
	Name        *string                            `json:"name,omitempty"`
	Order       *int32                             `json:"order,omitempty"`
	Type        *GoogleCloudDatacatalogV1FieldType `json:"type,omitempty"`
}
