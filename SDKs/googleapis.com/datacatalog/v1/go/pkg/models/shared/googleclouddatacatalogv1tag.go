package shared



type GoogleCloudDatacatalogV1Tag struct {
    Column *string `json:"column,omitempty"`
    Fields map[string]GoogleCloudDatacatalogV1TagField `json:"fields,omitempty"`
    Name *string `json:"name,omitempty"`
    Template *string `json:"template,omitempty"`
    TemplateDisplayName *string `json:"templateDisplayName,omitempty"`
    
}

