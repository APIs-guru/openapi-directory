package shared



type GoogleCloudDatacatalogV1TagTemplate struct {
    DisplayName *string `json:"displayName,omitempty"`
    Fields map[string]GoogleCloudDatacatalogV1TagTemplateField `json:"fields,omitempty"`
    IsPubliclyReadable *bool `json:"isPubliclyReadable,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

