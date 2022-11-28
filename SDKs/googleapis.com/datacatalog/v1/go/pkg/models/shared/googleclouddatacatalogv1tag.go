package shared

// GoogleCloudDatacatalogV1Tag
// Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
type GoogleCloudDatacatalogV1Tag struct {
	Column              *string                                     `json:"column,omitempty"`
	Fields              map[string]GoogleCloudDatacatalogV1TagField `json:"fields,omitempty"`
	Name                *string                                     `json:"name,omitempty"`
	Template            *string                                     `json:"template,omitempty"`
	TemplateDisplayName *string                                     `json:"templateDisplayName,omitempty"`
}

// GoogleCloudDatacatalogV1TagInput
// Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
type GoogleCloudDatacatalogV1TagInput struct {
	Column   *string                                          `json:"column,omitempty"`
	Fields   map[string]GoogleCloudDatacatalogV1TagFieldInput `json:"fields,omitempty"`
	Name     *string                                          `json:"name,omitempty"`
	Template *string                                          `json:"template,omitempty"`
}
