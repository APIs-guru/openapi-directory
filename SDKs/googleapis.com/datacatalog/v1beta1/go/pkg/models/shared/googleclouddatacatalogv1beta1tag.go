package shared



type GoogleCloudDatacatalogV1beta1Tag struct {
    Column *string `json:"column,omitempty"`
    Fields map[string]GoogleCloudDatacatalogV1beta1TagField `json:"fields,omitempty"`
    Name *string `json:"name,omitempty"`
    Template *string `json:"template,omitempty"`
    TemplateDisplayName *string `json:"templateDisplayName,omitempty"`
    
}

