package shared

type GoogleCloudDatacatalogV1beta1TagTemplate struct {
	DisplayName *string                                                  `json:"displayName,omitempty"`
	Fields      map[string]GoogleCloudDatacatalogV1beta1TagTemplateField `json:"fields,omitempty"`
	Name        *string                                                  `json:"name,omitempty"`
}
