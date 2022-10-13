package shared

type GoogleCloudDatacatalogV1Tag struct {
	Column              *string                                     `json:"column"`
	Fields              map[string]GoogleCloudDatacatalogV1TagField `json:"fields"`
	Name                *string                                     `json:"name"`
	Template            *string                                     `json:"template"`
	TemplateDisplayName *string                                     `json:"templateDisplayName"`
}
