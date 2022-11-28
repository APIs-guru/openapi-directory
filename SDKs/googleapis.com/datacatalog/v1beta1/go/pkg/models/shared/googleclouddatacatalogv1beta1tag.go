package shared

// GoogleCloudDatacatalogV1beta1TagInput
// Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
type GoogleCloudDatacatalogV1beta1TagInput struct {
	Column   *string                                               `json:"column,omitempty"`
	Fields   map[string]GoogleCloudDatacatalogV1beta1TagFieldInput `json:"fields,omitempty"`
	Name     *string                                               `json:"name,omitempty"`
	Template *string                                               `json:"template,omitempty"`
}

// GoogleCloudDatacatalogV1beta1Tag
// Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
type GoogleCloudDatacatalogV1beta1Tag struct {
	Column              *string                                          `json:"column,omitempty"`
	Fields              map[string]GoogleCloudDatacatalogV1beta1TagField `json:"fields,omitempty"`
	Name                *string                                          `json:"name,omitempty"`
	Template            *string                                          `json:"template,omitempty"`
	TemplateDisplayName *string                                          `json:"templateDisplayName,omitempty"`
}
