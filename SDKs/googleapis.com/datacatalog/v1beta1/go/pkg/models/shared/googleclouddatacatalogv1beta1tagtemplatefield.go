package shared

type GoogleCloudDatacatalogV1beta1TagTemplateField struct {
	Description *string                                 `json:"description"`
	DisplayName *string                                 `json:"displayName"`
	IsRequired  *bool                                   `json:"isRequired"`
	Name        *string                                 `json:"name"`
	Order       *int32                                  `json:"order"`
	Type        *GoogleCloudDatacatalogV1beta1FieldType `json:"type"`
}
