package shared

type GoogleCloudDatacatalogV1TagTemplate struct {
	DisplayName        *string                                             `json:"displayName"`
	Fields             map[string]GoogleCloudDatacatalogV1TagTemplateField `json:"fields"`
	IsPubliclyReadable *bool                                               `json:"isPubliclyReadable"`
	Name               *string                                             `json:"name"`
}
