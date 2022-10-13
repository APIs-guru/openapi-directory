package shared

type GoogleCloudDatacatalogV1beta1TagTemplate struct {
	DisplayName *string                                                  `json:"displayName"`
	Fields      map[string]GoogleCloudDatacatalogV1beta1TagTemplateField `json:"fields"`
	Name        *string                                                  `json:"name"`
}
